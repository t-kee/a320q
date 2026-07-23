const userFlowsStorageKey = "a320_user_flows_v1";
let userFlows = {};
let bundledUserFlows = {};
let flowBuilderDraft = null;
let flowBuilderCaptureStepIndex = null;
let flowBuilderCaptureActive = false;

async function loadBundledUserFlows() {
  try {
    const response = await fetch("data/a320-user-flows.json");
    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    const payload = await response.json();
    bundledUserFlows = payload.flows || {};
  } catch (error) {
    console.warn("Could not load bundled user flows", error);
    bundledUserFlows = {};
  }
}

function loadUserFlows() {
  try {
    userFlows = JSON.parse(localStorage.getItem(userFlowsStorageKey) || "{}");
  } catch (error) {
    console.warn("Could not load locally created flows", error);
    userFlows = {};
  }
}

function getFlowDefinition(flowId) {
  return (
    userFlows[flowId] ||
    bundledUserFlows[flowId] ||
    implementedFlows[flowId] ||
    null
  );
}

function getFlowCatalogEntries() {
  const entries = new Map(
    flowCatalog.map(([id, name, category = "normal"]) => [
      id,
      [id, name, category],
    ]),
  );
  Object.values(bundledUserFlows).forEach((flow) => {
    const previous = entries.get(flow.id);
    entries.set(flow.id, [
      flow.id,
      flow.name,
      flow.category || previous?.[2] || "normal",
    ]);
  });
  Object.values(userFlows).forEach((flow) => {
    const previous = entries.get(flow.id);
    entries.set(flow.id, [
      flow.id,
      flow.name,
      flow.category || previous?.[2] || "normal",
    ]);
  });
  return [...entries.values()];
}

function renderGroupedFlowOptions(entries, optionRenderer) {
  const categories = [
    ["normal", "Normal Procedures"],
    ["abnormal", "Abnormal / Emergency"],
  ];
  return categories
    .map(([category, label]) => {
      const options = entries
        .filter(([, , entryCategory]) => entryCategory === category)
        .map(optionRenderer)
        .join("");
      return options ? `<optgroup label="${label}">${options}</optgroup>` : "";
    })
    .join("");
}

function slugifyFlowName(name) {
  return (
    name
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-|-$/g, "") || `custom-flow-${Date.now()}`
  );
}

function findCockpitControl(panelId, controlId) {
  const hotspot = cockpitPanels[panelId]?.hotspots.find(
    ([id]) => id === controlId,
  );
  return hotspot
    ? { panel: panelId, controlId, label: hotspot[1] }
    : { panel: panelId, controlId, label: controlId };
}

function splitFlowInstruction(step) {
  if (step.action || step.state) {
    return {
      action: step.action || "",
      state: step.state || "",
    };
  }
  const instruction = step.instruction || "";
  const parts = instruction.split(/\s+[—–-]\s+/);
  return {
    action: parts.shift()?.trim() || instruction.trim(),
    state: parts.join(" — ").trim(),
  };
}

function normalizeFlowForBuilder(definition) {
  return {
    id: definition.id,
    name: definition.name,
    category: definition.category || "normal",
    trigger: definition.trigger || "",
    initialPanel: definition.initialPanel || "glareshield",
    steps: (definition.steps || []).map((step) => {
      let controls = [];
      if (Array.isArray(step.controls)) {
        controls = step.controls.map((control) =>
          findCockpitControl(control.panel, control.controlId),
        );
      } else if (step.controlId) {
        controls = [
          findCockpitControl(step.panel, step.controlId),
        ];
      } else if (step.controlIdBySeat) {
        const representativeId =
          step.controlIdBySeat.CM2 || Object.values(step.controlIdBySeat)[0];
        controls = [findCockpitControl(step.panel, representativeId)];
      }

      const text = splitFlowInstruction(step);
      return {
        actor: step.actor || step.role || "PF",
        mode: step.mode === "OR" ? "OR" : "AND",
        action: text.action,
        state: text.state,
        controls,
      };
    }),
  };
}

function toggleFlowBuilder() {
  const opening = document
    .getElementById("flow-builder")
    .classList.contains("hidden");
  setFlowBuilderView(opening);
}

function setFlowBuilderView(opening) {
  const builder = document.getElementById("flow-builder");
  const setup = document.getElementById("flow-setup");
  builder.classList.toggle("hidden", !opening);
  setup.classList.toggle("hidden", opening);
  if (opening) {
    renderFlowBuilderSelect();
    if (!flowBuilderDraft) {
      const selectedId =
        document.getElementById("flow-builder-select").value ||
        selectedFlowId;
      loadFlowIntoBuilder(selectedId);
    }
    builder.scrollIntoView({ behavior: "smooth", block: "start" });
  } else {
    setup.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}

function renderFlowBuilderSelect() {
  const select = document.getElementById("flow-builder-select");
  if (!select) return;
  const currentValue = flowBuilderDraft?.id || selectedFlowId;
  select.innerHTML = renderGroupedFlowOptions(
    getFlowCatalogEntries(),
    ([id, name]) => {
      const local = userFlows[id] ? " · local version" : "";
      return `<option value="${id}">${name}${local}</option>`;
    },
  );
  if (Array.from(select.options).some((option) => option.value === currentValue)) {
    select.value = currentValue;
  }
}

function loadSelectedFlowIntoBuilder() {
  loadFlowIntoBuilder(document.getElementById("flow-builder-select").value);
}

function loadFlowIntoBuilder(flowId) {
  const definition = getFlowDefinition(flowId);
  const catalogName =
    getFlowCatalogEntries().find(([id]) => id === flowId)?.[1] || "New Flow";
  const catalogCategory =
    getFlowCatalogEntries().find(([id]) => id === flowId)?.[2] || "normal";
  flowBuilderDraft = definition
    ? normalizeFlowForBuilder(definition)
    : {
        id: flowId,
        name: catalogName,
        category: catalogCategory,
        trigger: "",
        initialPanel: "glareshield",
        steps: [],
      };
  renderFlowBuilderDraft();
  setFlowBuilderStatus(
    definition
      ? `Editing ${definition.name}`
      : `Creating the first version of ${catalogName}`,
  );
}

function createNewFlowDraft() {
  flowBuilderDraft = {
    id: "",
    name: "",
    category: "normal",
    trigger: "",
    initialPanel: "glareshield",
    steps: [],
  };
  renderFlowBuilderDraft();
  document.getElementById("flow-builder-name").focus();
  setFlowBuilderStatus("New flow — add a name and at least one line.");
}

function syncFlowBuilderMetadata() {
  if (!flowBuilderDraft) return;
  flowBuilderDraft.name =
    document.getElementById("flow-builder-name").value.trim();
  flowBuilderDraft.trigger =
    document.getElementById("flow-builder-trigger").value.trim();
  flowBuilderDraft.category =
    document.getElementById("flow-builder-category").value;
}

function renderFlowBuilderDraft() {
  if (!flowBuilderDraft) return;
  document.getElementById("flow-builder-name").value =
    flowBuilderDraft.name || "";
  document.getElementById("flow-builder-trigger").value =
    flowBuilderDraft.trigger || "";
  document.getElementById("flow-builder-category").value =
    flowBuilderDraft.category || "normal";

  const steps = document.getElementById("flow-builder-steps");
  steps.innerHTML = flowBuilderDraft.steps.length
    ? flowBuilderDraft.steps
        .map((step, index) => renderFlowBuilderStep(step, index))
        .join("")
    : `
      <div class="flow-builder-empty">
        No lines yet. Add the first action to begin this flow.
      </div>
    `;
}

function renderFlowBuilderStep(step, index) {
  const controlChips = step.controls.length
    ? step.controls
        .map(
          (control) => `
            <span class="flow-control-chip">
              ${control.label}
              <button
                type="button"
                aria-label="Remove ${control.label}"
                onclick="removeFlowBuilderControl(${index}, '${control.panel}', '${control.controlId}')"
              >×</button>
            </span>
          `,
        )
        .join("")
    : `<span class="flow-no-controls">No cockpit control attached</span>`;
  const logicSelector =
    step.controls.length >= 3
      ? `
        <label class="flow-control-logic">
          <span>Selected controls</span>
          <select
            class="flow-step-mode"
            aria-label="Control logic for line ${index + 1}"
            onchange="updateFlowBuilderStep(${index}, 'mode', this.value)"
            title="AND requires every selected control. OR accepts any one control."
          >
            <option value="AND"${step.mode !== "OR" ? " selected" : ""}>AND</option>
            <option value="OR"${step.mode === "OR" ? " selected" : ""}>OR</option>
          </select>
        </label>
      `
      : "";

  return `
    <article class="flow-builder-step">
      <span class="flow-step-number">${String(index + 1).padStart(2, "0")}</span>
      <select
        aria-label="Crew member or role for line ${index + 1}"
        onchange="updateFlowBuilderStep(${index}, 'actor', this.value)"
      >
        <option value="CM1"${step.actor === "CM1" ? " selected" : ""}>CM1</option>
        <option value="CM2"${step.actor === "CM2" ? " selected" : ""}>CM2</option>
        <option value="PF"${step.actor === "PF" ? " selected" : ""}>PF</option>
        <option value="PM"${step.actor === "PM" ? " selected" : ""}>PM</option>
      </select>
      <input
        class="flow-step-action"
        type="text"
        value="${escapeFlowBuilderHtml(step.action)}"
        placeholder="Control / action, e.g. LAND LIGHT"
        aria-label="Control or action for line ${index + 1}"
        oninput="updateFlowBuilderStep(${index}, 'action', this.value)"
      />
      <input
        class="flow-step-state"
        type="text"
        value="${escapeFlowBuilderHtml(step.state)}"
        placeholder="Position, e.g. OFF"
        aria-label="Position for line ${index + 1}"
        oninput="updateFlowBuilderStep(${index}, 'state', this.value)"
      />
      <button
        class="flow-pick-controls-btn"
        type="button"
        onclick="startFlowControlCapture(${index})"
      >
        Pick controls
      </button>
      <button
        class="flow-delete-step-btn"
        type="button"
        aria-label="Delete line ${index + 1}"
        onclick="deleteFlowBuilderStep(${index})"
      >
        ×
      </button>
      <div class="flow-step-controls">
        ${logicSelector}
        <div class="flow-control-chips">${controlChips}</div>
      </div>
    </article>
  `;
}

function escapeFlowBuilderHtml(value) {
  return String(value || "")
    .replace(/&/g, "&amp;")
    .replace(/"/g, "&quot;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

function addFlowBuilderStep() {
  if (!flowBuilderDraft) createNewFlowDraft();
  syncFlowBuilderMetadata();
  flowBuilderDraft.steps.push({
    actor: "PF",
    mode: "AND",
    action: "",
    state: "",
    controls: [],
  });
  renderFlowBuilderDraft();
  const inputs = document.querySelectorAll(
    ".flow-builder-step .flow-step-action",
  );
  inputs[inputs.length - 1]?.focus();
}

function updateFlowBuilderStep(index, key, value) {
  if (!flowBuilderDraft?.steps[index]) return;
  flowBuilderDraft.steps[index][key] = value;
}

function deleteFlowBuilderStep(index) {
  syncFlowBuilderMetadata();
  flowBuilderDraft.steps.splice(index, 1);
  renderFlowBuilderDraft();
}

function removeFlowBuilderControl(index, panel, controlId) {
  syncFlowBuilderMetadata();
  const step = flowBuilderDraft?.steps[index];
  if (!step) return;
  step.controls = step.controls.filter(
    (control) =>
      control.panel !== panel || control.controlId !== controlId,
  );
  renderFlowBuilderDraft();
}

function startFlowControlCapture(index) {
  const step = flowBuilderDraft?.steps[index];
  if (!step) return;
  syncFlowBuilderMetadata();
  flowBuilderCaptureActive = true;
  flowBuilderCaptureStepIndex = index;
  const initialPanel = step.controls[0]?.panel || "glareshield";
  openCockpitPanel(initialPanel);
  renderFlowBuilderCaptureHeader();
}

function renderFlowBuilderCaptureHeader() {
  if (!flowBuilderCaptureActive) return;
  const step = flowBuilderDraft.steps[flowBuilderCaptureStepIndex];
  document.getElementById("flow-user-left").innerHTML = "";
  document.getElementById("flow-user-right").innerHTML = "";
  document.getElementById("flow-session-name").innerText = "Flow Editor";
  document.getElementById("flow-session-trigger").innerText =
    "Select one or more controls";
  document.getElementById("flow-session-header").classList.remove("hidden");

  const bar = document.getElementById("flow-action-bar");
  bar.classList.remove("hidden", "demo", "complete");
  document.getElementById("flow-action-actor").innerText = step.actor;
  document.getElementById("flow-action-instruction").innerText =
    [step.action, step.state].filter(Boolean).join(" — ") || "Unnamed action";
  document.getElementById("flow-action-progress").innerText =
    `${step.controls.length} selected`;
  document.getElementById("flow-action-restart").classList.add("hidden");
  document.getElementById("flow-action-previous").classList.add("hidden");
  document.getElementById("flow-action-play").classList.add("hidden");
  document.getElementById("flow-action-next").classList.add("hidden");
  document.getElementById("flow-action-guided").classList.add("hidden");
  document.getElementById("flow-capture-done").classList.remove("hidden");
  refreshFlowBuilderCapture();
}

function refreshFlowBuilderCapture() {
  document
    .querySelectorAll(".cockpit-hotspot.flow-builder-selected")
    .forEach((hotspot) => hotspot.classList.remove("flow-builder-selected"));
  if (!flowBuilderCaptureActive) return;

  const step = flowBuilderDraft.steps[flowBuilderCaptureStepIndex];
  step.controls
    .filter((control) => control.panel === activeCockpitPanel)
    .forEach((control) => {
      document
        .querySelector(
          `.cockpit-hotspot[data-control-id="${control.controlId}"]`,
        )
        ?.classList.add("flow-builder-selected");
    });
  document.getElementById("flow-action-progress").innerText =
    `${step.controls.length} selected`;
}

function handleFlowBuilderHotspotClick(controlId) {
  if (!flowBuilderCaptureActive) return false;
  const step = flowBuilderDraft.steps[flowBuilderCaptureStepIndex];
  const existingIndex = step.controls.findIndex(
    (control) =>
      control.panel === activeCockpitPanel &&
      control.controlId === controlId,
  );
  if (existingIndex >= 0) {
    step.controls.splice(existingIndex, 1);
  } else {
    step.controls.push(findCockpitControl(activeCockpitPanel, controlId));
  }
  refreshFlowBuilderCapture();
  return true;
}

function isFlowBuilderCapturing() {
  return flowBuilderCaptureActive;
}

function finishFlowControlCapture() {
  flowBuilderCaptureActive = false;
  flowBuilderCaptureStepIndex = null;
  closeCockpitPanel();
  renderFlowBuilderDraft();
  setFlowBuilderStatus("Controls attached. Save the flow when ready.");
}

function cancelFlowBuilderCapture() {
  flowBuilderCaptureActive = false;
  flowBuilderCaptureStepIndex = null;
  document.getElementById("flow-capture-done")?.classList.add("hidden");
  restoreFlowPlaybackButtons();
  renderFlowBuilderDraft();
}

function restoreFlowPlaybackButtons() {
  document.getElementById("flow-action-restart")?.classList.remove("hidden");
  document.getElementById("flow-action-previous")?.classList.remove("hidden");
  document.getElementById("flow-action-play")?.classList.remove("hidden");
  document.getElementById("flow-action-next")?.classList.remove("hidden");
  document.getElementById("flow-action-guided")?.classList.remove("hidden");
  document.getElementById("flow-capture-done")?.classList.add("hidden");
}

function saveFlowDraft() {
  if (!flowBuilderDraft) return;
  syncFlowBuilderMetadata();
  const name = flowBuilderDraft.name;
  const validSteps = flowBuilderDraft.steps.filter(
    (step) =>
      step.action.trim() &&
      step.state.trim() &&
      step.controls.length,
  );
  if (!name) {
    setFlowBuilderStatus("Add a flow name before saving.", true);
    return;
  }
  if (!validSteps.length) {
    setFlowBuilderStatus(
      "Add at least one line with an action, a position and cockpit controls.",
      true,
    );
    return;
  }

  const originalId = flowBuilderDraft.id;
  const id = originalId || slugifyFlowName(name);
  const savedFlow = {
    ...flowBuilderDraft,
    id,
    steps: validSteps,
  };
  userFlows[id] = JSON.parse(JSON.stringify(savedFlow));
  localStorage.setItem(userFlowsStorageKey, JSON.stringify(userFlows));
  flowBuilderDraft = normalizeFlowForBuilder(savedFlow);
  selectedFlowId = id;
  renderFlowBuilderSelect();
  initializeFlowSetup();
  document.getElementById("flow-select").value = id;
  selectFlow(id);
  document.getElementById("flow-setup-status").innerText =
    `${name} saved locally and ready to test.`;
  setFlowBuilderView(false);
}

function deleteFlowOverride() {
  const id = flowBuilderDraft?.id;
  if (!id || !userFlows[id]) {
    setFlowBuilderStatus("This flow has no local version to delete.", true);
    return;
  }
  delete userFlows[id];
  localStorage.setItem(userFlowsStorageKey, JSON.stringify(userFlows));
  renderFlowBuilderSelect();
  initializeFlowSetup();
  loadFlowIntoBuilder(id);
  setFlowBuilderStatus("Local version deleted; built-in data restored.");
}

function exportUserFlows() {
  const blob = new Blob(
    [
      JSON.stringify(
        {
          version: 1,
          exportedAt: new Date().toISOString(),
          flows: userFlows,
        },
        null,
        2,
      ),
    ],
    { type: "application/json" },
  );
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = "a320-user-flows.json";
  link.click();
  URL.revokeObjectURL(url);
  setFlowBuilderStatus("Flows exported as JSON.");
}

function openFlowImportPicker() {
  document.getElementById("flow-import-input").click();
}

function importUserFlows(event) {
  const file = event.target.files?.[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = () => {
    try {
      const payload = JSON.parse(reader.result);
      const imported = payload.flows || payload;
      userFlows = { ...userFlows, ...imported };
      localStorage.setItem(userFlowsStorageKey, JSON.stringify(userFlows));
      renderFlowBuilderSelect();
      initializeFlowSetup();
      setFlowBuilderStatus("Flows imported successfully.");
    } catch (error) {
      setFlowBuilderStatus("This JSON file could not be imported.", true);
    }
    event.target.value = "";
  };
  reader.readAsText(file);
}

function setFlowBuilderStatus(message, isError = false) {
  const status = document.getElementById("flow-builder-status");
  if (!status) return;
  status.innerText = message;
  status.classList.toggle("error", isError);
}

async function initializeFlowBuilder() {
  await loadBundledUserFlows();
  loadUserFlows();
  renderFlowBuilderSelect();
}
