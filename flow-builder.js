const userFlowsStorageKey = "a320_user_flows_v1";
let userFlows = {};
let flowBuilderDraft = null;
let flowBuilderCaptureStepIndex = null;
let flowBuilderCaptureActive = false;

function loadUserFlows() {
  try {
    userFlows = JSON.parse(localStorage.getItem(userFlowsStorageKey) || "{}");
  } catch (error) {
    console.warn("Could not load locally created flows", error);
    userFlows = {};
  }
}

function getFlowDefinition(flowId) {
  return userFlows[flowId] || implementedFlows[flowId] || null;
}

function getFlowCatalogEntries() {
  const entries = [...flowCatalog];
  Object.values(userFlows).forEach((flow) => {
    if (!entries.some(([id]) => id === flow.id)) {
      entries.push([flow.id, flow.name]);
    }
  });
  return entries;
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

function normalizeFlowForBuilder(definition) {
  return {
    id: definition.id,
    name: definition.name,
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

      return {
        role: step.role || "PF",
        instruction:
          step.instruction ||
          [step.action, step.state].filter(Boolean).join(" — "),
        controls,
      };
    }),
  };
}

function toggleFlowBuilder() {
  const builder = document.getElementById("flow-builder");
  const opening = builder.classList.contains("hidden");
  builder.classList.toggle("hidden", !opening);
  if (opening) {
    renderFlowBuilderSelect();
    if (!flowBuilderDraft) {
      const selectedId =
        document.getElementById("flow-builder-select").value ||
        selectedFlowId;
      loadFlowIntoBuilder(selectedId);
    }
    builder.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}

function renderFlowBuilderSelect() {
  const select = document.getElementById("flow-builder-select");
  if (!select) return;
  const currentValue = flowBuilderDraft?.id || selectedFlowId;
  select.innerHTML = getFlowCatalogEntries()
    .map(([id, name]) => {
      const local = userFlows[id] ? " · local version" : "";
      return `<option value="${id}">${name}${local}</option>`;
    })
    .join("");
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
  flowBuilderDraft = definition
    ? normalizeFlowForBuilder(definition)
    : {
        id: flowId,
        name: catalogName,
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
}

function renderFlowBuilderDraft() {
  if (!flowBuilderDraft) return;
  document.getElementById("flow-builder-name").value =
    flowBuilderDraft.name || "";
  document.getElementById("flow-builder-trigger").value =
    flowBuilderDraft.trigger || "";

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

  return `
    <article class="flow-builder-step">
      <span class="flow-step-number">${String(index + 1).padStart(2, "0")}</span>
      <select
        aria-label="Role for line ${index + 1}"
        onchange="updateFlowBuilderStep(${index}, 'role', this.value)"
      >
        <option value="PF"${step.role === "PF" ? " selected" : ""}>PF</option>
        <option value="PM"${step.role === "PM" ? " selected" : ""}>PM</option>
      </select>
      <input
        type="text"
        value="${escapeFlowBuilderHtml(step.instruction)}"
        placeholder="e.g. Landing lights — OFF"
        aria-label="Instruction for line ${index + 1}"
        oninput="updateFlowBuilderStep(${index}, 'instruction', this.value)"
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
      <div class="flow-step-controls">${controlChips}</div>
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
    role: "PF",
    instruction: "",
    controls: [],
  });
  renderFlowBuilderDraft();
  const inputs = document.querySelectorAll(
    '.flow-builder-step input[type="text"]',
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
  document.getElementById("flow-action-actor").innerText = step.role;
  document.getElementById("flow-action-instruction").innerText =
    step.instruction || "Unnamed action";
  document.getElementById("flow-action-progress").innerText =
    `${step.controls.length} selected`;
  document.getElementById("flow-action-previous").classList.add("hidden");
  document.getElementById("flow-action-play").classList.add("hidden");
  document.getElementById("flow-action-next").classList.add("hidden");
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
  document.getElementById("flow-action-previous")?.classList.remove("hidden");
  document.getElementById("flow-action-play")?.classList.remove("hidden");
  document.getElementById("flow-action-next")?.classList.remove("hidden");
  document.getElementById("flow-capture-done")?.classList.add("hidden");
}

function saveFlowDraft() {
  if (!flowBuilderDraft) return;
  syncFlowBuilderMetadata();
  const name = flowBuilderDraft.name;
  const validSteps = flowBuilderDraft.steps.filter(
    (step) => step.instruction.trim() && step.controls.length,
  );
  if (!name) {
    setFlowBuilderStatus("Add a flow name before saving.", true);
    return;
  }
  if (!validSteps.length) {
    setFlowBuilderStatus(
      "Add at least one line with an instruction and cockpit controls.",
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
  setFlowBuilderStatus(`${name} saved locally and ready to test.`);
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

function initializeFlowBuilder() {
  loadUserFlows();
  renderFlowBuilderSelect();
}
