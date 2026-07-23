if (typeof db === "undefined") {
  alert(
    "Error: Cannot load questions.js. Make sure it is in the same folder.",
  );
}

function switchMetaTab(tabId) {
  const examSection = document.getElementById("meta-exam");
  const studySection = document.getElementById("meta-study");
  const examButton = document.getElementById("meta-exam-btn");
  const studyButton = document.getElementById("meta-study-btn");
  const showExam = tabId === "exam";

  examSection.classList.toggle("hidden", !showExam);
  studySection.classList.toggle("hidden", showExam);
  examButton.classList.toggle("active", showExam);
  studyButton.classList.toggle("active", !showExam);
  document.getElementById("app").classList.toggle("study-mode", !showExam);
}

function switchStudyTab(tabId) {
  document
    .getElementById("study-flows")
    .classList.toggle("hidden", tabId !== "flows");
  document
    .getElementById("study-flashcards")
    .classList.toggle("hidden", tabId !== "flashcards");

  document.querySelectorAll("[data-study-tab]").forEach((button) => {
    button.classList.toggle("active", button.dataset.studyTab === tabId);
  });
}

let selectedFlowSeat = "CM1";
let selectedFlowRole = "PF";
let selectedFlowId = "after-landing";
let activeFlowSession = null;
let flowRunToken = 0;

function otherFlowSeat(seat) {
  return seat === "CM1" ? "CM2" : "CM1";
}

function selectFlowSeat(seat) {
  selectedFlowSeat = seat;
  document.querySelectorAll("[data-flow-seat]").forEach((button) => {
    button.classList.toggle("active", button.dataset.flowSeat === seat);
  });
}

function selectFlowRole(role) {
  selectedFlowRole = role;
  document.querySelectorAll("[data-flow-role]").forEach((button) => {
    button.classList.toggle("active", button.dataset.flowRole === role);
  });
}

function selectFlow(flowId) {
  selectedFlowId = flowId;
  const definition = getFlowDefinition(flowId);
  const available = Boolean(definition);
  const startButton = document.getElementById("flow-start-btn");
  const status = document.getElementById("flow-setup-status");
  startButton.disabled = !available;
  status.innerText = available
    ? `${definition.name} is ready to train.`
    : "This flow is listed from the OM-B and will be implemented later.";
}

function initializeFlowSetup() {
  const select = document.getElementById("flow-select");
  if (!select || typeof flowCatalog === "undefined") return;

  select.innerHTML = getFlowCatalogEntries()
    .map(([id, name]) => {
      const suffix = getFlowDefinition(id) ? "" : " — coming soon";
      return `<option value="${id}">${name}${suffix}</option>`;
    })
    .join("");
  select.value = selectedFlowId;
  selectFlow(selectedFlowId);
}

function startSelectedFlow() {
  startFlow(selectedFlowId, selectedFlowSeat, selectedFlowRole);
}

function startRandomFlow() {
  const availableFlowIds = getFlowCatalogEntries()
    .map(([id]) => id)
    .filter((id) => getFlowDefinition(id));
  const flowId =
    availableFlowIds[Math.floor(Math.random() * availableFlowIds.length)];
  const seat = Math.random() < 0.5 ? "CM1" : "CM2";
  const role = Math.random() < 0.5 ? "PF" : "PM";

  selectedFlowId = flowId;
  document.getElementById("flow-select").value = flowId;
  selectFlowSeat(seat);
  selectFlowRole(role);
  selectFlow(flowId);
  startFlow(flowId, seat, role);
}

function startFlow(flowId, seat, role) {
  const definition = getFlowDefinition(flowId);
  if (!definition) return;

  flowRunToken += 1;
  activeFlowSession = {
    definition,
    seat,
    role,
    stepIndex: 0,
    demoInProgress: false,
    paused: false,
    timer: null,
    demoHotspots: [],
    completedControlKeys: new Set(),
    token: flowRunToken,
  };

  restoreFlowPlaybackButtons();
  renderFlowSessionHeader();
  openCockpitPanel(definition.initialPanel);
  const token = activeFlowSession.token;
  activeFlowSession.timer = window.setTimeout(
    () => advanceFlow(token),
    850,
  );
}

function renderFlowSessionHeader() {
  if (!activeFlowSession) return;
  const { definition, seat, role } = activeFlowSession;
  const left = document.getElementById("flow-user-left");
  const right = document.getElementById("flow-user-right");
  const badge = `
    <span class="flow-user-badge">
      <strong>${seat}</strong><span>${role}</span>
    </span>
  `;

  left.innerHTML = seat === "CM1" ? badge : "";
  right.innerHTML = seat === "CM2" ? badge : "";
  document.getElementById("flow-session-name").innerText = definition.name;
  document.getElementById("flow-session-trigger").innerText =
    definition.trigger;
  document.getElementById("flow-session-header").classList.remove("hidden");
  document.getElementById("flow-action-bar").classList.remove("hidden");
  restoreFlowPlaybackButtons();
}

function getFlowStepSeat(stepRole) {
  if (!activeFlowSession) return "";
  return stepRole === activeFlowSession.role
    ? activeFlowSession.seat
    : otherFlowSeat(activeFlowSession.seat);
}

function getFlowStepControls(step) {
  if (Array.isArray(step.controls)) {
    return step.controls.map(({ panel, controlId }) => ({
      panel,
      controlId,
    }));
  }
  if (step.controlIdBySeat) {
    return [
      {
        panel: step.panel,
        controlId: step.controlIdBySeat[getFlowStepSeat(step.role)],
      },
    ];
  }
  return [{ panel: step.panel, controlId: step.controlId }];
}

function getFlowPlaybackControls(step) {
  const controls = getFlowStepControls(step);
  return step.mode === "OR" ? controls.slice(0, 1) : controls;
}

function getFlowStepInstruction(step) {
  return (
    step.instruction ||
    [step.action, step.state].filter(Boolean).join(" — ")
  );
}

function getFlowControlKey(panel, controlId) {
  return `${panel}:${controlId}`;
}

function updateFlowActionBar(step, mode, message) {
  const session = activeFlowSession;
  if (!session) return;
  const bar = document.getElementById("flow-action-bar");
  const stepSeat = getFlowStepSeat(step.role);
  const instruction = message || getFlowStepInstruction(step);

  bar.classList.toggle("demo", mode === "demo");
  bar.classList.remove("complete");
  document.getElementById("flow-action-actor").innerText =
    `${stepSeat} · ${step.role}`;
  document.getElementById("flow-action-instruction").innerText = instruction;
  document.getElementById("flow-action-progress").innerText =
    `${session.stepIndex + 1} / ${session.definition.steps.length}`;
  document.getElementById("flow-action-play").disabled =
    mode !== "demo";
  document.getElementById("flow-action-play").innerText =
    session.paused ? "▶" : "❚❚";
}

function refreshFlowPanelGuidance() {
  document.querySelectorAll(".cockpit-panel-switch").forEach((button) => {
    button.classList.remove("flow-panel-target");
  });
  if (!activeFlowSession || activeFlowSession.demoInProgress) return;

  const step =
    activeFlowSession.definition.steps[activeFlowSession.stepIndex];
  if (!step || step.role !== activeFlowSession.role) return;
  const targetPanels = new Set(
    getFlowStepControls(step)
      .filter(
        ({ panel, controlId }) =>
          !activeFlowSession.completedControlKeys.has(
            getFlowControlKey(panel, controlId),
          ),
      )
      .map(({ panel }) => panel),
  );
  document.querySelectorAll(".cockpit-panel-switch").forEach((button) => {
    const panelId = button.dataset.panelId;
    button.classList.toggle("flow-panel-target", targetPanels.has(panelId));
  });
  document.querySelectorAll(".cockpit-hotspot").forEach((hotspot) => {
    const key = getFlowControlKey(
      activeCockpitPanel,
      hotspot.dataset.controlId,
    );
    hotspot.classList.toggle(
      "flow-correct",
      activeFlowSession.completedControlKeys.has(key),
    );
  });
}

function clearFlowTimer(removeHighlights = false) {
  const session = activeFlowSession;
  if (!session) return;
  if (session.timer) window.clearTimeout(session.timer);
  session.timer = null;
  if (removeHighlights) {
    session.demoHotspots.forEach((hotspot) =>
      hotspot?.classList.remove("flow-demo"),
    );
    session.demoHotspots = [];
  }
}

function advanceFlow(token) {
  const session = activeFlowSession;
  if (!session || session.token !== token) return;
  clearFlowTimer(true);
  document
    .querySelectorAll(".cockpit-hotspot.flow-correct, .cockpit-hotspot.flow-incorrect")
    .forEach((hotspot) =>
      hotspot.classList.remove("flow-correct", "flow-incorrect"),
    );
  session.completedControlKeys = new Set();

  const step = session.definition.steps[session.stepIndex];
  if (!step) {
    finishFlow();
    return;
  }

  if (step.role === session.role) {
    session.demoInProgress = false;
    updateFlowActionBar(step, "user");
    refreshFlowPanelGuidance();
    return;
  }

  playFlowDemoStep(step, token);
}

function playFlowDemoStep(step, token) {
  const session = activeFlowSession;
  if (!session || session.token !== token) return;
  session.demoInProgress = true;
  updateFlowActionBar(step, "demo");
  const controls = getFlowPlaybackControls(step);
  const panels = [...new Set(controls.map(({ panel }) => panel))];
  playFlowDemoPanel(step, panels, 0, token);
}

function playFlowDemoPanel(step, panels, panelIndex, token) {
  const session = activeFlowSession;
  if (!session || session.token !== token) return;
  const panel = panels[panelIndex];
  openCockpitPanel(panel);

  session.timer = window.setTimeout(() => {
    if (!activeFlowSession || activeFlowSession.token !== token) return;
    const controlsOnPanel = getFlowPlaybackControls(step).filter(
      (control) => control.panel === panel,
    );
    activeFlowSession.demoHotspots = controlsOnPanel.map(({ controlId }) =>
      document.querySelector(
        `.cockpit-hotspot[data-control-id="${controlId}"]`,
      ),
    );
    activeFlowSession.demoHotspots.forEach((hotspot) =>
      hotspot?.classList.add("flow-demo"),
    );
    activeFlowSession.demoPanelIndex = panelIndex;
    activeFlowSession.demoPanels = panels;
    if (!activeFlowSession.paused) scheduleFlowDemoCompletion(step, token);
  }, 180);
}

function scheduleFlowDemoCompletion(step, token) {
  const session = activeFlowSession;
  if (!session || session.token !== token) return;
  clearFlowTimer(false);
  session.timer = window.setTimeout(() => {
    if (!activeFlowSession || activeFlowSession.token !== token) return;
    clearFlowTimer(true);
    const nextPanelIndex = activeFlowSession.demoPanelIndex + 1;
    if (nextPanelIndex < activeFlowSession.demoPanels.length) {
      playFlowDemoPanel(
        step,
        activeFlowSession.demoPanels,
        nextPanelIndex,
        token,
      );
      return;
    }
    activeFlowSession.stepIndex += 1;
    advanceFlow(token);
  }, 1000);
}

function handleFlowHotspotClick(controlId) {
  const session = activeFlowSession;
  if (!session) return false;
  const step = session.definition.steps[session.stepIndex];
  if (!step || session.demoInProgress) return true;

  const hotspot = document.querySelector(
    `.cockpit-hotspot[data-control-id="${controlId}"]`,
  );
  const expectedControls = getFlowStepControls(step);
  const clickedKey = getFlowControlKey(activeCockpitPanel, controlId);
  const expectedKeys = new Set(
    expectedControls.map(({ panel, controlId: expectedId }) =>
      getFlowControlKey(panel, expectedId),
    ),
  );
  if (
    step.role !== session.role ||
    !expectedKeys.has(clickedKey)
  ) {
    hotspot?.classList.add("flow-incorrect");
    updateFlowActionBar(
      step,
      "user",
      `Not yet — ${getFlowStepInstruction(step)}`,
    );
    window.setTimeout(
      () => hotspot?.classList.remove("flow-incorrect"),
      450,
    );
    return true;
  }

  session.completedControlKeys.add(clickedKey);
  hotspot?.classList.add("flow-correct");
  const isComplete =
    step.mode === "OR"
      ? session.completedControlKeys.size > 0
      : [...expectedKeys].every((key) =>
          session.completedControlKeys.has(key),
        );
  if (!isComplete) {
    document.getElementById("flow-action-progress").innerText =
      `${session.completedControlKeys.size}/${expectedKeys.size} controls · ${session.stepIndex + 1}/${session.definition.steps.length}`;
    refreshFlowPanelGuidance();
    return true;
  }

  window.setTimeout(() => {
    if (!activeFlowSession || activeFlowSession.token !== session.token) return;
    hotspot?.classList.remove("flow-correct");
    activeFlowSession.stepIndex += 1;
    advanceFlow(session.token);
  }, 320);
  return true;
}

function flowPlaybackPrevious() {
  const session = activeFlowSession;
  if (!session) return;
  clearFlowTimer(true);
  session.stepIndex = Math.max(0, session.stepIndex - 1);
  session.demoInProgress = false;
  advanceFlow(session.token);
}

function flowPlaybackNext() {
  const session = activeFlowSession;
  if (!session) return;
  clearFlowTimer(true);
  session.stepIndex = Math.min(
    session.definition.steps.length,
    session.stepIndex + 1,
  );
  session.demoInProgress = false;
  advanceFlow(session.token);
}

function toggleFlowPlayback() {
  const session = activeFlowSession;
  if (!session || !session.demoInProgress) return;
  session.paused = !session.paused;
  const button = document.getElementById("flow-action-play");
  button.innerText = session.paused ? "▶" : "❚❚";
  button.setAttribute(
    "aria-label",
    session.paused ? "Resume automatic playback" : "Pause automatic playback",
  );
  if (session.paused) {
    clearFlowTimer(false);
    return;
  }
  const step = session.definition.steps[session.stepIndex];
  if (session.demoHotspots.length) {
    scheduleFlowDemoCompletion(step, session.token);
  } else {
    playFlowDemoStep(step, session.token);
  }
}

function finishFlow() {
  if (!activeFlowSession) return;
  const bar = document.getElementById("flow-action-bar");
  bar.classList.remove("demo");
  bar.classList.add("complete");
  document.getElementById("flow-action-actor").innerText = "COMPLETE";
  document.getElementById("flow-action-instruction").innerText =
    `${activeFlowSession.definition.name} flow complete`;
  document.getElementById("flow-action-progress").innerText =
    `${activeFlowSession.definition.steps.length} / ${activeFlowSession.definition.steps.length}`;
  document.getElementById("flow-action-play").disabled = true;
  document
    .querySelectorAll(".cockpit-panel-switch")
    .forEach((button) => button.classList.remove("flow-panel-target"));
}

function cancelFlowSession() {
  clearFlowTimer(true);
  flowRunToken += 1;
  activeFlowSession = null;
  document.getElementById("flow-session-header")?.classList.add("hidden");
  const actionBar = document.getElementById("flow-action-bar");
  actionBar?.classList.add("hidden");
  actionBar?.classList.remove("demo", "complete");
}

let activeCockpitPanel = null;
let cockpitZoom = 1;
let cockpitFitWidth = 0;
let cockpitLabelsVisible = false;
let cockpitEditMode = false;
let cockpitEditOperation = null;
let cockpitMappingDirty = false;
const cockpitMappingStorageKey = "a320_cockpit_hotspot_overrides_v1";
let defaultCockpitHotspots = null;
const cockpitPointers = new Map();
let cockpitDragStart = null;
let cockpitPinchStart = null;

function getCockpitMappingSnapshot() {
  return Object.fromEntries(
    Object.entries(cockpitPanels).map(([panelId, panel]) => [
      panelId,
      Object.fromEntries(
        panel.hotspots.map(([id, _label, x, y, width, height]) => [
          id,
          { x, y, width, height },
        ]),
      ),
    ]),
  );
}

function applyCockpitMapping(mapping) {
  Object.entries(mapping || {}).forEach(([panelId, controls]) => {
    const panel = cockpitPanels[panelId];
    if (!panel || !controls) return;
    panel.hotspots.forEach((hotspot) => {
      const override = controls[hotspot[0]];
      if (!override) return;
      hotspot[2] = override.x;
      hotspot[3] = override.y;
      hotspot[4] = override.width;
      hotspot[5] = override.height;
    });
  });
}

async function applyBundledCockpitMapping() {
  try {
    const response = await fetch("data/a320-cockpit-hotspots.json");
    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    const mapping = await response.json();
    applyCockpitMapping(mapping.panels);
  } catch (error) {
    console.warn("Could not load bundled cockpit mapping", error);
  }
}

function applySavedCockpitMapping() {
  try {
    const saved = JSON.parse(
      localStorage.getItem(cockpitMappingStorageKey) || "{}",
    );
    applyCockpitMapping(saved);
  } catch (error) {
    console.warn("Could not load cockpit mapping overrides", error);
  }
}

function renderCockpitPanelCards() {
  const container = document.getElementById("cockpit-panel-cards");
  if (!container || typeof cockpitPanels === "undefined") return;

  const panelOrder = ["overhead", "glareshield", "pedestal"];
  container.innerHTML = panelOrder
    .map(
      (panelId, index) => `
        <button
          class="cockpit-panel-card"
          type="button"
          onclick="openCockpitPanel('${panelId}')"
        >
          <span class="cockpit-card-order">${String(index + 1).padStart(2, "0")}</span>
          <strong>${cockpitPanels[panelId].label}</strong>
          <span aria-hidden="true">Open →</span>
        </button>
      `,
    )
    .join("");

  renderCockpitPanelSwitcher();
}

function renderCockpitPanelSwitcher() {
  const switcher = document.getElementById("cockpit-panel-switcher");
  if (!switcher) return;

  switcher.innerHTML = ["overhead", "glareshield", "pedestal"]
    .map((panelId) => {
      const activeClass = panelId === activeCockpitPanel ? " active" : "";
      return `
        <button class="cockpit-panel-switch${activeClass}" type="button"
          aria-label="${cockpitPanels[panelId].label}"
          data-panel-id="${panelId}"
          onclick="openCockpitPanel('${panelId}')">
          ${cockpitPanels[panelId].label}
        </button>
      `;
    })
    .join("");
}

function openCockpitPanel(panelId) {
  const panel = cockpitPanels[panelId];
  if (!panel) return;

  activeCockpitPanel = panelId;
  cockpitZoom = 1;
  document.getElementById("cockpit-panel-viewer").classList.remove("hidden");
  document.body.classList.add("cockpit-modal-open");
  document.getElementById("cockpit-panel-title").innerText = panel.label;

  const image = document.getElementById("cockpit-image");
  image.onload = fitCockpitPanelToViewport;
  image.src = panel.image;
  image.alt = `${panel.label} panel`;

  const hotspots = document.getElementById("cockpit-hotspots");
  hotspots.innerHTML = panel.hotspots
    .map(([id, label, x, y, width, height, group]) => {
      const style = `left:${x}%;top:${y}%;width:${width}%;height:${height}%;`;
      return `
        <button
          class="cockpit-hotspot"
          style="${style}"
          aria-label="${label}"
          title="${label}"
          onclick="handleCockpitHotspotClick(event, '${id}')"
          data-control-id="${id}"
          data-control-name="${label}"
          data-control-group="${group}"
        >
          <span class="cockpit-resize-handle" aria-hidden="true"></span>
        </button>
      `;
    })
    .join("");
  hotspots.classList.toggle("show-labels", cockpitLabelsVisible);

  renderCockpitPanelSwitcher();
  refreshFlowPanelGuidance();
  refreshFlowBuilderCapture();
  if (image.complete) requestAnimationFrame(fitCockpitPanelToViewport);
}

function closeCockpitPanel() {
  if (cockpitEditMode) toggleCockpitEditor();
  if (isFlowBuilderCapturing()) cancelFlowBuilderCapture();
  cancelFlowSession();
  activeCockpitPanel = null;
  document.getElementById("cockpit-panel-viewer").classList.add("hidden");
  document.body.classList.remove("cockpit-modal-open");
  closeCockpitControl();
}

function handleCockpitModalBackdrop(event) {
  if (event.target === event.currentTarget) closeCockpitPanel();
}

function fitCockpitPanelToViewport() {
  if (!activeCockpitPanel) return;
  const viewport = document.getElementById("cockpit-viewport");
  const panel = cockpitPanels[activeCockpitPanel];
  const availableWidth = Math.max(1, viewport.clientWidth - 2);
  const availableHeight = Math.max(1, viewport.clientHeight - 2);
  cockpitFitWidth = Math.min(
    availableWidth,
    availableHeight * panel.aspectRatio,
  );
  cockpitZoom = 1;
  updateCockpitZoom();
  viewport.scrollTo(0, 0);
}

function handleCockpitHotspotClick(event, controlId) {
  if (cockpitEditMode) {
    event.preventDefault();
    return;
  }
  if (handleFlowBuilderHotspotClick(controlId)) {
    event.preventDefault();
    return;
  }
  if (handleFlowHotspotClick(controlId)) {
    event.preventDefault();
    return;
  }
  showCockpitControl(controlId);
}

function updateCockpitZoom(anchorX, anchorY, previousZoom = cockpitZoom) {
  const canvas = document.getElementById("cockpit-canvas");
  const viewport = document.getElementById("cockpit-viewport");
  if (!cockpitFitWidth) cockpitFitWidth = viewport.clientWidth;
  canvas.style.width = `${cockpitFitWidth * cockpitZoom}px`;
  document.getElementById("cockpit-zoom-value").value =
    `${Math.round(cockpitZoom * 100)}%`;
  viewport.classList.toggle("is-zoomed", cockpitZoom > 1.001);

  if (anchorX !== undefined && anchorY !== undefined) {
    const ratio = cockpitZoom / previousZoom;
    viewport.scrollLeft = (viewport.scrollLeft + anchorX) * ratio - anchorX;
    viewport.scrollTop = (viewport.scrollTop + anchorY) * ratio - anchorY;
  }
}

function changeCockpitZoom(delta, anchorX, anchorY) {
  const previousZoom = cockpitZoom;
  cockpitZoom = Math.min(4, Math.max(1, cockpitZoom + delta));
  updateCockpitZoom(anchorX, anchorY, previousZoom);
}

function toggleCockpitLabels() {
  cockpitLabelsVisible = !cockpitLabelsVisible;
  document
    .getElementById("cockpit-hotspots")
    .classList.toggle("show-labels", cockpitLabelsVisible);
  document
    .getElementById("cockpit-label-toggle")
    .classList.toggle("active", cockpitLabelsVisible);
}

function showCockpitControl(controlId) {
  const hotspot = document.querySelector(
    `.cockpit-hotspot[data-control-id="${controlId}"]`,
  );
  if (!hotspot) return;

  document
    .querySelectorAll(".cockpit-hotspot.selected")
    .forEach((button) => button.classList.remove("selected"));
  hotspot.classList.add("selected");

  document.getElementById("cockpit-control-group").innerText =
    hotspot.dataset.controlGroup;
  document.getElementById("cockpit-control-name").innerText =
    hotspot.dataset.controlName;
  document.getElementById("cockpit-control-sheet").classList.remove("hidden");
}

function closeCockpitControl() {
  document.getElementById("cockpit-control-sheet").classList.add("hidden");
  document
    .querySelectorAll(".cockpit-hotspot.selected")
    .forEach((button) => button.classList.remove("selected"));
}

function setCockpitEditorStatus(message, isDirty = false) {
  cockpitMappingDirty = isDirty;
  const status = document.getElementById("cockpit-editor-status");
  status.innerText = message;
  status.classList.toggle("unsaved", isDirty);
}

function toggleCockpitEditor() {
  cockpitEditMode = !cockpitEditMode;
  const viewport = document.getElementById("cockpit-viewport");
  const toggle = document.getElementById("cockpit-edit-toggle");
  const editorBar = document.getElementById("cockpit-editor-bar");

  viewport.classList.toggle("edit-mode", cockpitEditMode);
  toggle.classList.toggle("active", cockpitEditMode);
  toggle.innerText = cockpitEditMode ? "Finish editing" : "Edit zones";
  editorBar.classList.toggle("hidden", !cockpitEditMode);
  closeCockpitControl();

  if (cockpitEditMode && cockpitZoom < 1.5) {
    changeCockpitZoom(0.5);
  }
}

function updateCockpitHotspotFromElement(hotspotElement) {
  const panel = cockpitPanels[activeCockpitPanel];
  const hotspot = panel?.hotspots.find(
    ([id]) => id === hotspotElement.dataset.controlId,
  );
  if (!hotspot) return;

  hotspot[2] = Number.parseFloat(hotspotElement.style.left);
  hotspot[3] = Number.parseFloat(hotspotElement.style.top);
  hotspot[4] = Number.parseFloat(hotspotElement.style.width);
  hotspot[5] = Number.parseFloat(hotspotElement.style.height);
}

function saveCockpitMapping() {
  localStorage.setItem(
    cockpitMappingStorageKey,
    JSON.stringify(getCockpitMappingSnapshot()),
  );
  setCockpitEditorStatus("Saved locally in this browser");
}

function exportCockpitMapping() {
  const payload = {
    version: 1,
    exportedAt: new Date().toISOString(),
    panels: getCockpitMappingSnapshot(),
  };
  const blob = new Blob([JSON.stringify(payload, null, 2)], {
    type: "application/json",
  });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = "a320-cockpit-hotspots.json";
  link.click();
  URL.revokeObjectURL(url);
  setCockpitEditorStatus("JSON mapping exported", cockpitMappingDirty);
}

function resetCockpitPanelMapping() {
  const defaults = defaultCockpitHotspots?.[activeCockpitPanel];
  if (!defaults) return;
  cockpitPanels[activeCockpitPanel].hotspots = JSON.parse(
    JSON.stringify(defaults.hotspots),
  );
  openCockpitPanel(activeCockpitPanel);
  document.getElementById("cockpit-viewport").classList.add("edit-mode");
  cockpitEditMode = true;
  document.getElementById("cockpit-edit-toggle").classList.add("active");
  document.getElementById("cockpit-edit-toggle").innerText = "Finish editing";
  document.getElementById("cockpit-editor-bar").classList.remove("hidden");
  setCockpitEditorStatus("Panel reset — save to keep this change", true);
}

function setupCockpitHotspotEditor() {
  const hotspotLayer = document.getElementById("cockpit-hotspots");
  if (!hotspotLayer) return;

  hotspotLayer.addEventListener("pointerdown", (event) => {
    if (!cockpitEditMode) return;
    const hotspot = event.target.closest(".cockpit-hotspot");
    if (!hotspot) return;

    event.preventDefault();
    event.stopPropagation();
    hotspot.setPointerCapture(event.pointerId);

    const canvasRect = document
      .getElementById("cockpit-canvas")
      .getBoundingClientRect();
    cockpitEditOperation = {
      pointerId: event.pointerId,
      hotspot,
      mode: event.target.closest(".cockpit-resize-handle")
        ? "resize"
        : "move",
      startX: event.clientX,
      startY: event.clientY,
      x: Number.parseFloat(hotspot.style.left),
      y: Number.parseFloat(hotspot.style.top),
      width: Number.parseFloat(hotspot.style.width),
      height: Number.parseFloat(hotspot.style.height),
      canvasWidth: canvasRect.width,
      canvasHeight: canvasRect.height,
    };
    hotspot.classList.add("editing");
  });

  hotspotLayer.addEventListener("pointermove", (event) => {
    const operation = cockpitEditOperation;
    if (!operation || operation.pointerId !== event.pointerId) return;

    const dx = ((event.clientX - operation.startX) / operation.canvasWidth) * 100;
    const dy =
      ((event.clientY - operation.startY) / operation.canvasHeight) * 100;

    if (operation.mode === "move") {
      const x = Math.min(
        100 - operation.width,
        Math.max(0, operation.x + dx),
      );
      const y = Math.min(
        100 - operation.height,
        Math.max(0, operation.y + dy),
      );
      operation.hotspot.style.left = `${x.toFixed(3)}%`;
      operation.hotspot.style.top = `${y.toFixed(3)}%`;
    } else {
      const width = Math.min(
        100 - operation.x,
        Math.max(0.2, operation.width + dx),
      );
      const height = Math.min(
        100 - operation.y,
        Math.max(0.2, operation.height + dy),
      );
      operation.hotspot.style.width = `${width.toFixed(3)}%`;
      operation.hotspot.style.height = `${height.toFixed(3)}%`;
    }
  });

  const finishEditingHotspot = (event) => {
    const operation = cockpitEditOperation;
    if (!operation || operation.pointerId !== event.pointerId) return;
    operation.hotspot.classList.remove("editing");
    updateCockpitHotspotFromElement(operation.hotspot);
    cockpitEditOperation = null;
    setCockpitEditorStatus("Unsaved changes", true);
  };

  hotspotLayer.addEventListener("pointerup", finishEditingHotspot);
  hotspotLayer.addEventListener("pointercancel", finishEditingHotspot);
}

function cockpitPointerDistance() {
  const points = Array.from(cockpitPointers.values());
  if (points.length < 2) return 0;
  return Math.hypot(points[0].x - points[1].x, points[0].y - points[1].y);
}

function setupCockpitGestures() {
  const viewport = document.getElementById("cockpit-viewport");
  if (!viewport) return;

  viewport.addEventListener("pointerdown", (event) => {
    if (event.target.closest(".cockpit-hotspot")) return;
    viewport.setPointerCapture(event.pointerId);
    cockpitPointers.set(event.pointerId, { x: event.clientX, y: event.clientY });

    if (cockpitPointers.size === 1) {
      cockpitDragStart = {
        x: event.clientX,
        y: event.clientY,
        left: viewport.scrollLeft,
        top: viewport.scrollTop,
      };
    } else if (cockpitPointers.size === 2) {
      cockpitPinchStart = {
        distance: cockpitPointerDistance(),
        zoom: cockpitZoom,
      };
    }
  });

  viewport.addEventListener("pointermove", (event) => {
    if (!cockpitPointers.has(event.pointerId)) return;
    cockpitPointers.set(event.pointerId, { x: event.clientX, y: event.clientY });

    if (cockpitPointers.size === 2 && cockpitPinchStart) {
      const points = Array.from(cockpitPointers.values());
      const centerX =
        (points[0].x + points[1].x) / 2 - viewport.getBoundingClientRect().left;
      const centerY =
        (points[0].y + points[1].y) / 2 - viewport.getBoundingClientRect().top;
      const previousZoom = cockpitZoom;
      cockpitZoom = Math.min(
        4,
        Math.max(
          1,
          cockpitPinchStart.zoom *
            (cockpitPointerDistance() / cockpitPinchStart.distance),
        ),
      );
      updateCockpitZoom(centerX, centerY, previousZoom);
    } else if (cockpitPointers.size === 1 && cockpitDragStart) {
      viewport.scrollLeft =
        cockpitDragStart.left - (event.clientX - cockpitDragStart.x);
      viewport.scrollTop =
        cockpitDragStart.top - (event.clientY - cockpitDragStart.y);
    }
  });

  const finishPointer = (event) => {
    cockpitPointers.delete(event.pointerId);
    if (cockpitPointers.size < 2) cockpitPinchStart = null;
    if (cockpitPointers.size === 0) cockpitDragStart = null;
  };

  viewport.addEventListener("pointerup", finishPointer);
  viewport.addEventListener("pointercancel", finishPointer);
  viewport.addEventListener(
    "wheel",
    (event) => {
      if (!event.ctrlKey && !event.metaKey) return;
      event.preventDefault();
      const rect = viewport.getBoundingClientRect();
      changeCockpitZoom(
        event.deltaY < 0 ? 0.25 : -0.25,
        event.clientX - rect.left,
        event.clientY - rect.top,
      );
    },
    { passive: false },
  );
}

setupCockpitGestures();
setupCockpitHotspotEditor();

async function initializeCockpitMapping() {
  await applyBundledCockpitMapping();
  defaultCockpitHotspots = JSON.parse(JSON.stringify(cockpitPanels));
  applySavedCockpitMapping();
  renderCockpitPanelCards();
}

async function initializeStudyTools() {
  await Promise.all([initializeFlowBuilder(), initializeCockpitMapping()]);
  initializeFlowSetup();
}

initializeStudyTools();

window.addEventListener("resize", () => {
  const viewer = document.getElementById("cockpit-panel-viewer");
  if (activeCockpitPanel && viewer && !viewer.classList.contains("hidden")) {
    fitCockpitPanelToViewport();
  }
});

window.addEventListener("keydown", (event) => {
  const viewer = document.getElementById("cockpit-panel-viewer");
  if (
    event.key === "Escape" &&
    viewer &&
    !viewer.classList.contains("hidden")
  ) {
    closeCockpitPanel();
  }
});

// --- USER ID GENERATION ---
let userId = localStorage.getItem("a320_user_id");
if (!userId) {
  userId = "user_" + Math.random().toString(36).substr(2, 9);
  localStorage.setItem("a320_user_id", userId);
}

// --- DARK MODE LOGIC ---
function initDarkMode() {
  const isDark = localStorage.getItem("a320_dark_mode") === "true";
  if (isDark) {
    document.documentElement.setAttribute("data-theme", "dark");
    const btn = document.getElementById("dark-mode-btn");
    if(btn) btn.innerText = "☀️";
  }
}

function toggleDarkMode() {
  const html = document.documentElement;
  const isDark = html.getAttribute("data-theme") === "dark";
  const btn = document.getElementById("dark-mode-btn");
  if (isDark) {
    html.removeAttribute("data-theme");
    localStorage.setItem("a320_dark_mode", "false");
    if(btn) btn.innerText = "🌙";
  } else {
    html.setAttribute("data-theme", "dark");
    localStorage.setItem("a320_dark_mode", "true");
    if(btn) btn.innerText = "☀️";
  }

  // Refresh charts if we are in history tab
  if (!document.getElementById("tab-history").classList.contains("hidden")) {
      renderHistory();
  }
}

initDarkMode();

// --- DEVICE DETECTION ---
function getDeviceType() {
  const ua = navigator.userAgent;
  if (/(tablet|ipad|playbook|silk)|(android(?!.*mobi))/i.test(ua)) {
    return "Tablet";
  }
  if (
    /Mobile|iP(hone|od)|Android|BlackBerry|IEMobile|Kindle|Silk-Accelerated|(hpw|web)OS|Opera M(obi|ini)/.test(
      ua,
    )
  ) {
    return "Mobile";
  }
  return "Desktop";
}

let seenQuestions =
  JSON.parse(localStorage.getItem("a320_seen_questions")) || [];

function migrateLegacyThemeStats() {
  const migrationKey = "a320_theme_stats_migration_v2_done";
  if (localStorage.getItem(migrationKey) === "true") return;

  const oldStats =
    JSON.parse(localStorage.getItem("a320_theme_stats")) || {};
  const migratedStats = {};

  // Keep categories that still exist, and merge the old EFB name into the new one.
  if (oldStats["Limitations"]) {
    migratedStats["Limitations"] = oldStats["Limitations"];
  }

  const efbStats = [
    oldStats["EFB / Performances"],
    oldStats["Performance / EFB"],
  ]
    .filter(Boolean)
    .reduce(
      (acc, stats) => ({
        correct: acc.correct + (stats.correct || 0),
        total: acc.total + (stats.total || 0),
      }),
      { correct: 0, total: 0 },
    );

  if (efbStats.total > 0) {
    migratedStats["EFB / Performances"] = efbStats;
  }

  localStorage.setItem("a320_theme_stats", JSON.stringify(migratedStats));
  localStorage.setItem(migrationKey, "true");
}

migrateLegacyThemeStats();

let themeStats =
  JSON.parse(localStorage.getItem("a320_theme_stats")) || {};
let testHistory =
  JSON.parse(localStorage.getItem("a320_test_history")) || [];
let pinnedQuestions =
  JSON.parse(localStorage.getItem("a320_pinned_questions")) || [];

let chartInstance = null;

// Quiz state variables
let activeHistoryId = null;
let isReviewMode = false;
let currentQuiz = [];
let userAnswers = []; // stores objects: { isCorrect: boolean, selectedIndex: int }
let currentQuestionIndex = 0;
let navPage = 0;
const navPageSize = 50;

// Telemetry variables
let sessionStartTime = null;
let questionStartTime = null;
let totalQuestionTime = 0;
let failedQuestionIds = [];
let currentViewedQuestionId = null;

// DOM Elements
const themeSelect = document.getElementById("theme-select");
const countSlider = document.getElementById("question-count");
const unseenCheckbox = document.getElementById("unseen-only");
const pinnedCheckbox = document.getElementById("pinned-only");
const countDisplay = document.getElementById("count-display");
const searchInput = document.getElementById("search-input");
const searchResults = document.getElementById("search-results");

// Init UI
document.getElementById("db-total").innerText = db ? db.length : 0;
document.getElementById("seen-stats").innerText = seenQuestions.length;
document.getElementById("pinned-stats").innerText =
  pinnedQuestions.length;

// Populate Themes Dropdown
if (db && db.length > 0) {
  const uniqueThemes = [...new Set(db.map((q) => q.theme))].sort();
  uniqueThemes.forEach((theme) => {
    const option = document.createElement("option");
    option.value = theme;
    option.textContent = theme;
    themeSelect.appendChild(option);
  });
}

// Checkbox exclusive logic & Slider dynamic max
unseenCheckbox.addEventListener("change", () => {
  if (unseenCheckbox.checked) pinnedCheckbox.checked = false;
  updateSliderMax();
});

pinnedCheckbox.addEventListener("change", () => {
  if (pinnedCheckbox.checked) unseenCheckbox.checked = false;
  updateSliderMax();
});

themeSelect.addEventListener("change", updateSliderMax);

countSlider.addEventListener("input", (e) => {
  countDisplay.innerText = e.target.value;

  if (parseInt(e.target.value) >= 101) {
    countSlider.classList.add("monkey-slider");
  } else {
    countSlider.classList.remove("monkey-slider");
  }
});

function updateSliderMax() {
  let pool = db || [];

  const selectedTheme = themeSelect.value;
  if (selectedTheme !== "all") {
    pool = pool.filter((q) => q.theme === selectedTheme);
  }

  if (unseenCheckbox.checked) {
    pool = pool.filter((q) => !seenQuestions.includes(q.id));
  } else if (pinnedCheckbox.checked) {
    pool = pool.filter((q) => pinnedQuestions.includes(q.id));
  }

  const maxVal = pool.length;
  countSlider.max = maxVal === 0 ? 1 : maxVal;

  if (parseInt(countSlider.value) > maxVal) {
    countSlider.value = maxVal;
  } else if (maxVal > 0 && parseInt(countSlider.value) === 0) {
    countSlider.value = 1;
  }
  countDisplay.innerText = maxVal === 0 ? "0" : countSlider.value;
  if (parseInt(countSlider.value) >= 101) {
    countSlider.classList.add("monkey-slider");
  } else {
    countSlider.classList.remove("monkey-slider");
  }
}

if (db) updateSliderMax();
if (parseInt(countSlider.value) >= 101) {
  countSlider.classList.add("monkey-slider");
}

function switchTab(tabId) {
  document.getElementById("tab-setup").classList.add("hidden");
  document.getElementById("tab-stats").classList.add("hidden");
  document.getElementById("tab-history").classList.add("hidden");
  document.getElementById("tab-search").classList.add("hidden");
  document.getElementById("tab-question-view").classList.add("hidden");
  document.getElementById("result-screen").classList.add("hidden");
  document.getElementById("quiz-screen").classList.add("hidden");

  const btns = document.querySelectorAll(".exam-nav .nav-btn");
  btns.forEach((btn) => btn.classList.remove("active"));

  document.getElementById(`tab-${tabId}`).classList.remove("hidden");

  const clickedBtn = Array.from(btns).find((btn) =>
    btn.innerText.toLowerCase().includes(tabId.replace("-view", "")),
  );
  if (clickedBtn) clickedBtn.classList.add("active");

  if (tabId === "stats") renderStats();
  if (tabId === "history") renderHistory();
  if (tabId === "search") searchInput.focus();
}

// --- SEARCH LOGIC ---
searchInput.addEventListener("input", function (e) {
  const query = e.target.value.toLowerCase().trim();
  searchResults.innerHTML = "";

  if (query === "") return;

  const results = db.filter((q) => {
    const idStr = q.id.toString();
    const idMatch = idStr.includes(query);
    const textMatch =
      q.question.toLowerCase().includes(query) ||
      q.options.some((opt) => opt.toLowerCase().includes(query)) ||
      q.explanation.toLowerCase().includes(query);
    return idMatch || textMatch;
  });

  if (results.length === 0) {
    searchResults.innerHTML =
      '<p style="text-align:center; color:#7f8c8d;">No results found.</p>';
    return;
  }

  results.forEach((q) => {
    const div = document.createElement("div");
    div.className = "search-item";
    div.onclick = () => viewQuestion(q.id);
    div.innerHTML = `
            <div>
                <span class="search-item-id">ID: ${q.id}</span>
                <span class="search-item-theme">${q.theme}</span>
            </div>
            <div class="search-item-text">${q.question}</div>
        `;
    searchResults.appendChild(div);
  });
});

function viewQuestion(id) {
  const q = db.find((x) => x.id === id);
  if (!q) return;

  currentViewedQuestionId = id;

  document.getElementById("tab-search").classList.add("hidden");
  document.getElementById("tab-question-view").classList.remove("hidden");

  document.getElementById("view-theme-badge").innerText = q.theme;
  document.getElementById("view-question-id-badge").innerText =
    `ID: ${q.id}`;
  const viewPinBtn = document.getElementById("view-pin-btn");
  if (pinnedQuestions.includes(q.id)) {
    viewPinBtn.className = "pin-btn pinned";
    viewPinBtn.innerHTML = "★";
    viewPinBtn.title = "Unpin this question";
  } else {
    viewPinBtn.className = "pin-btn unpinned";
    viewPinBtn.innerHTML = "☆";
    viewPinBtn.title = "Pin this question";
  }
  document.getElementById("view-question-text").innerHTML = q.question;

  const optsContainer = document.getElementById("view-options-container");
  optsContainer.innerHTML = "";

  q.options.forEach((optText, index) => {
    const div = document.createElement("div");
    div.className = "option disabled";
    div.innerHTML = optText;
    if (index === q.correct) {
      div.classList.add("correct");
    }
    optsContainer.appendChild(div);
  });

  const expl = document.getElementById("view-explanation");
  expl.innerHTML = `<strong>Explanation:</strong><br><br>${q.explanation}`;
}

function backToSearch() {
  document.getElementById("tab-question-view").classList.add("hidden");
  document.getElementById("tab-search").classList.remove("hidden");
}
// --------------------

function renderStats() {
  const container = document.getElementById("stats-container");
  if (Object.keys(themeStats).length === 0) {
    container.innerHTML =
      '<p style="text-align:center; color:#7f8c8d;">No data available. Take a few tests!</p>';
    return;
  }

  let html =
    "<table><tr><th>Theme</th><th>Seen</th><th>Average Score</th></tr>";
  const sortedThemes = Object.entries(themeStats).sort(([a], [b]) =>
    a.localeCompare(b),
  );

  for (const [theme, data] of sortedThemes) {
    const percent = Math.round((data.correct / data.total) * 100);
    const color =
      percent >= 75
        ? "var(--correct)"
        : percent >= 50
          ? "#f39c12"
          : "var(--incorrect)";
    html += `<tr>
          <td style="font-weight: bold;">${theme}</td>
          <td>${data.total}</td>
          <td style="color: ${color}; font-weight: bold;">${percent}%</td>
      </tr>`;
  }
  html += "</table>";
  container.innerHTML = html;
}

function renderHistory() {
  const container = document.getElementById("history-container");
  const chartWrapper = document.getElementById("chart-wrapper");

  if (testHistory.length === 0) {
    container.innerHTML =
      '<p style="text-align:center; color:#7f8c8d;">No tests recorded.</p>';
    chartWrapper.classList.add("hidden");
    return;
  }

  chartWrapper.classList.remove("hidden");

  let html = "";
  [...testHistory].reverse().forEach((test) => {
    const isSaved = test.status === "saved";
    const color = isSaved
      ? "#f39c12"
      : test.percentage >= 75
        ? "var(--correct)"
        : "var(--incorrect)";
    const statusBadge = isSaved
      ? `<span style="background:var(--warning-color); color:white; padding:2px 6px; border-radius:4px; font-size:10px; margin-left:5px;">PAUSED</span>`
      : "";

    let actionBtn = "";
    if (test.quizData) {
      if (isSaved) {
        actionBtn = `<button class="action-btn" style="margin-top:0; padding:6px 12px; font-size:12px;" onclick="resumeTest(${test.id})">Resume</button>`;
      } else {
        actionBtn = `<button class="action-btn" style="margin-top:0; padding:6px 12px; font-size:12px; background-color:#7f8c8d;" onclick="reviewTest(${test.id})">Review</button>`;
      }
    }

    html += `<div class="history-card">
          <div style="flex: 1;">
              <strong>Test from ${test.date}</strong> ${statusBadge}<br>
              <span style="font-size: 12px; color: var(--text-muted);">${test.score} / ${test.total} correct</span>
          </div>
          <div style="margin-right: 15px; font-size: 20px; font-weight: bold; color: ${color};">${isSaved ? "--" : test.percentage}%</div>
          <div>${actionBtn}</div>
      </div>`;
  });
  container.innerHTML = html;

  const finishedTests = testHistory.filter((t) => t.status !== "saved");
  const ctx = document.getElementById("historyChart").getContext("2d");
  if (chartInstance) chartInstance.destroy();

  if (finishedTests.length > 0) {
    const labels = finishedTests.map((t) => t.date.slice(5));
    const dataScores = finishedTests.map((t) => t.percentage);
    const thresholdLine = finishedTests.map(() => 75);

    chartInstance = new Chart(ctx, {
      type: "line",
      data: {
        labels: labels,
        datasets: [
          {
            label: "Score Achieved (%)",
            data: dataScores,
            borderColor: getComputedStyle(document.documentElement).getPropertyValue("--accent").trim() || "#3498db",
            backgroundColor: getComputedStyle(document.documentElement).getPropertyValue("--chart-fill").trim() || "rgba(52, 152, 219, 0.2)",
            fill: true,
            tension: 0.3,
            pointBackgroundColor: getComputedStyle(document.documentElement).getPropertyValue("--accent").trim() || "#2980b9",
          },
          {
            label: "Passing Threshold (75%)",
            data: thresholdLine,
            borderColor: getComputedStyle(document.documentElement).getPropertyValue("--incorrect").trim() || "#e74c3c",
            borderDash: [5, 5],
            borderWidth: 2,
            pointRadius: 0,
            fill: false,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          y: {
            beginAtZero: true,
            max: 100,
            ticks: { stepSize: 25 },
          },
        },
        plugins: { legend: { position: "bottom" } },
      },
    });
  }
}

function resetProgress() {
  if (
    confirm(
      "Are you sure you want to clear all your history, including pinned questions?",
    )
  ) {
    Object.keys(localStorage)
      .filter(
        (key) =>
          key.startsWith("a320_") &&
          key !== "a320_user_id" &&
          key !== "a320_dark_mode",
      )
      .forEach((key) => localStorage.removeItem(key));

    location.reload();
  }
}

// --- RESUME & REVIEW LOGIC ---
function loadTestState(id, mode) {
  const test = testHistory.find((t) => t.id === id);
  if (!test) return;

  activeHistoryId = test.id;
  isReviewMode = mode === "review";
  const hasValidQuizData =
    Array.isArray(test.quizData) &&
    test.quizData.length > 0 &&
    test.quizData.every(
      (lightQ) =>
        lightQ &&
        Number.isInteger(lightQ.id) &&
        Array.isArray(lightQ.order),
    );

  if (!hasValidQuizData) {
    alert(
      "This saved test uses an older or invalid format and cannot be resumed or reviewed.",
    );
    returnToMenu();
    return;
  }
  // Réhydratation du squelette allégé
  currentQuiz = test.quizData
    .map((lightQ) => {
      const fullQ = db.find((db_q) => db_q.id === lightQ.id);
      if (!fullQ) return null;

      return {
        ...fullQ,
        shuffledOptions: lightQ.order.map((origIdx) => ({
          text: fullQ.options[origIdx],
          isCorrect: origIdx === fullQ.correct,
          originalIndex: origIdx,
        })),
      };
    })
    .filter((q) => q !== null);
  if (currentQuiz.length === 0) {
    alert(
      "This saved test is no longer valid because the question database was updated.",
    );
    returnToMenu();
    return;
  }
  userAnswers = test.answersData;
  currentQuestionIndex = mode === "resume" ? test.currentIndex : 0;
  navPage = 0;

  sessionStartTime = Date.now() - (test.timeData.elapsedSessionTime || 0);
  totalQuestionTime = test.timeData.totalQuestionTime || 0;
  failedQuestionIds = test.failedIds || [];

  document.getElementById("tab-history").classList.add("hidden");
  document.getElementById("main-nav").classList.add("hidden");
  document.getElementById("quiz-screen").classList.remove("hidden");

  if (isReviewMode) {
    document.getElementById("save-exit-btn").classList.add("hidden");
    document.getElementById("end-quiz-btn").innerText = "Close Review";
    document.getElementById("keyboard-help").classList.add("hidden");
  } else {
    document.getElementById("save-exit-btn").classList.remove("hidden");
    document.getElementById("end-quiz-btn").innerText =
      "End training and see results";
    document.getElementById("keyboard-help").classList.remove("hidden");
  }

  showQuestion();
}

function resumeTest(id) {
  loadTestState(id, "resume");
}
function reviewTest(id) {
  loadTestState(id, "review");
}

// --- QUIZ LOGIC ---

function startQuiz() {
  let pool = db || [];

  const selectedTheme = themeSelect.value;
  if (selectedTheme !== "all") {
    pool = pool.filter((q) => q.theme === selectedTheme);
    if (pool.length === 0) {
      alert("No questions available for this theme.");
      return;
    }
  }

  if (unseenCheckbox.checked) {
    pool = pool.filter((q) => !seenQuestions.includes(q.id));
    if (pool.length === 0) {
      alert("You have already seen all the questions in this selection!");
      return;
    }
  } else if (pinnedCheckbox.checked) {
    pool = pool.filter((q) => pinnedQuestions.includes(q.id));
    if (pool.length === 0) {
      alert("You don't have any pinned questions in this selection!");
      return;
    }
  }

  const nbQuestions = Math.min(parseInt(countSlider.value), pool.length);
  if (nbQuestions === 0) return;

  currentQuiz = [...pool]
    .sort(() => 0.5 - Math.random())
    .slice(0, nbQuestions)
    .map((q) => {
      let options = q.options.map((text, idx) => ({
        text,
        isCorrect: idx === q.correct,
        originalIndex: idx, // <-- Mémorisation de la position
      }));
      options.sort(() => Math.random() - 0.5);
      return { ...q, shuffledOptions: options };
    });

  activeHistoryId = Date.now();
  isReviewMode = false;
  userAnswers = new Array(nbQuestions).fill(null);
  currentQuestionIndex = 0;
  navPage = 0;

  sessionStartTime = Date.now();
  totalQuestionTime = 0;
  failedQuestionIds = [];

  document.getElementById("save-exit-btn").classList.remove("hidden");
  document.getElementById("end-quiz-btn").innerText =
    "End training and see results";
  document.getElementById("keyboard-help").classList.remove("hidden");

  document.getElementById("tab-setup").classList.add("hidden");
  document.getElementById("main-nav").classList.add("hidden");
  document.getElementById("quiz-screen").classList.remove("hidden");
  showQuestion();
}

function togglePin() {
  const q = currentQuiz[currentQuestionIndex];
  const pinBtn = document.getElementById("pin-btn");

  if (pinnedQuestions.includes(q.id)) {
    pinnedQuestions = pinnedQuestions.filter((id) => id !== q.id);
    pinBtn.className = "pin-btn unpinned";
    pinBtn.innerHTML = "☆";
    pinBtn.title = "Pin this question";
  } else {
    pinnedQuestions.push(q.id);
    pinBtn.className = "pin-btn pinned";
    pinBtn.innerHTML = "★";
    pinBtn.title = "Unpin this question";
  }

  localStorage.setItem(
    "a320_pinned_questions",
    JSON.stringify(pinnedQuestions),
  );
  document.getElementById("pinned-stats").innerText =
    pinnedQuestions.length;
  updateSliderMax();
}

function togglePinById(questionId) {
  const viewPinBtn = document.getElementById("view-pin-btn");

  if (pinnedQuestions.includes(questionId)) {
    pinnedQuestions = pinnedQuestions.filter((id) => id !== questionId);
    viewPinBtn.className = "pin-btn unpinned";
    viewPinBtn.innerHTML = "☆";
    viewPinBtn.title = "Pin this question";
  } else {
    pinnedQuestions.push(questionId);
    viewPinBtn.className = "pin-btn pinned";
    viewPinBtn.innerHTML = "★";
    viewPinBtn.title = "Unpin this question";
  }

  localStorage.setItem(
    "a320_pinned_questions",
    JSON.stringify(pinnedQuestions),
  );

  document.getElementById("pinned-stats").innerText =
    pinnedQuestions.length;

  updateSliderMax();
}

function showQuestion() {
  const q = currentQuiz[currentQuestionIndex];

  document.getElementById("progress-text").innerText =
    `${currentQuestionIndex + 1} / ${currentQuiz.length}`;
  document.getElementById("theme-badge").innerText = q.theme;
  document.getElementById("question-id-badge").innerText = `ID: ${q.id}`;
  document.getElementById("question-text").innerHTML = q.question;

  const pinBtn = document.getElementById("pin-btn");
  if (pinnedQuestions.includes(q.id)) {
    pinBtn.className = "pin-btn pinned";
    pinBtn.innerHTML = "★";
    pinBtn.title = "Unpin this question";
  } else {
    pinBtn.className = "pin-btn unpinned";
    pinBtn.innerHTML = "☆";
    pinBtn.title = "Pin this question";
  }

  const optionsContainer = document.getElementById("options-container");
  optionsContainer.innerHTML = "";

  const answeredData = userAnswers[currentQuestionIndex];

  q.shuffledOptions.forEach((opt, index) => {
    const div = document.createElement("div");
    div.className = "option";
    div.innerHTML = opt.text;

    if (answeredData) {
      div.classList.add("disabled");
      if (opt.isCorrect) {
        div.classList.add("correct");
      }
      if (index === answeredData.selectedIndex && !opt.isCorrect) {
        div.classList.add("incorrect");
      }
    } else {
      div.onclick = () => selectAnswer(opt.isCorrect, div, index, q);
    }

    optionsContainer.appendChild(div);
  });

  const explDiv = document.getElementById("explanation");
  const nextBtn = document.getElementById("next-btn");

  if (answeredData) {
    const title = answeredData.isCorrect ? "Correct!" : "Incorrect!";
    explDiv.innerHTML = `<strong>${title}</strong><br><br>${q.explanation}`;
    explDiv.classList.remove("hidden");

    nextBtn.classList.remove("hidden");
    if (currentQuestionIndex < currentQuiz.length - 1) {
      nextBtn.innerText = "Next Question";
    } else {
      nextBtn.innerText = "Finish Training";
    }
  } else {
    explDiv.classList.add("hidden");
    nextBtn.classList.add("hidden");
  }

  renderNavigator();

  if (!isReviewMode) {
    questionStartTime = Date.now();
  }
}

function selectAnswer(isCorrect, _unused, selectedIndex, questionData) {
  if (userAnswers[currentQuestionIndex] || isReviewMode) return;

  totalQuestionTime += Date.now() - questionStartTime;
  if (!isCorrect) {
    failedQuestionIds.push(questionData.id);
  }

  userAnswers[currentQuestionIndex] = {
    isCorrect: isCorrect,
    selectedIndex: selectedIndex,
  };

  if (!seenQuestions.includes(questionData.id)) {
    seenQuestions.push(questionData.id);
    localStorage.setItem(
      "a320_seen_questions",
      JSON.stringify(seenQuestions),
    );
    document.getElementById("seen-stats").innerText =
      seenQuestions.length;
    updateSliderMax();
  }

  if (!themeStats[questionData.theme]) {
    themeStats[questionData.theme] = { correct: 0, total: 0 };
  }
  themeStats[questionData.theme].total++;
  if (isCorrect) themeStats[questionData.theme].correct++;
  localStorage.setItem("a320_theme_stats", JSON.stringify(themeStats));

  showQuestion();
}

function nextQuestion() {
  if (currentQuestionIndex < currentQuiz.length - 1) {
    currentQuestionIndex++;
    showQuestion();
  } else {
    endQuiz();
  }
}

function renderNavigator() {
  const navContainer = document.getElementById("quiz-navigator");
  navContainer.innerHTML = "";

  const totalPages = Math.ceil(currentQuiz.length / navPageSize);

  const expectedPage = Math.floor(currentQuestionIndex / navPageSize);
  if (navPage !== expectedPage && !window.manualNavPageChange) {
    navPage = expectedPage;
  }
  window.manualNavPageChange = false;

  const startIdx = navPage * navPageSize;
  const endIdx = Math.min(startIdx + navPageSize, currentQuiz.length);

  if (navPage > 0) {
    const prevBtn = document.createElement("button");
    prevBtn.className = "nav-circle nav-arrow";
    prevBtn.innerText = "< Prev";
    prevBtn.onclick = () => {
      navPage--;
      window.manualNavPageChange = true;
      renderNavigator();
    };
    navContainer.appendChild(prevBtn);
  }

  for (let i = startIdx; i < endIdx; i++) {
    const btn = document.createElement("button");
    btn.className = "nav-circle";
    btn.innerText = i + 1;

    if (userAnswers[i]) {
      if (userAnswers[i].isCorrect) btn.classList.add("correct");
      else btn.classList.add("incorrect");
    }

    if (i === currentQuestionIndex) {
      btn.classList.add("current");
    }

    btn.onclick = () => {
      currentQuestionIndex = i;
      showQuestion();
    };
    navContainer.appendChild(btn);
  }

  if (navPage < totalPages - 1) {
    const nextBtn = document.createElement("button");
    nextBtn.className = "nav-circle nav-arrow";
    nextBtn.innerText = "Next >";
    nextBtn.onclick = () => {
      navPage++;
      window.manualNavPageChange = true;
      renderNavigator();
    };
    navContainer.appendChild(nextBtn);
  }
}

// --- KEYBOARD SHORTCUTS ---
document.addEventListener("keydown", (e) => {
  const quizScreen = document.getElementById("quiz-screen");
  if (quizScreen.classList.contains("hidden")) return;

  if (e.target.tagName === "INPUT" || e.target.tagName === "TEXTAREA")
    return;

  if (e.key === "ArrowRight") {
    if (currentQuestionIndex < currentQuiz.length - 1) {
      currentQuestionIndex++;
      showQuestion();
    }
  } else if (e.key === "ArrowLeft") {
    if (currentQuestionIndex > 0) {
      currentQuestionIndex--;
      showQuestion();
    }
  } else if (e.key.toLowerCase() === "f") {
    togglePin();
  }

  if (!isReviewMode && !userAnswers[currentQuestionIndex]) {
    const keyMap = { a: 0, b: 1, c: 2, d: 3 };
    const key = e.key.toLowerCase();

    if (keyMap[key] !== undefined) {
      const idx = keyMap[key];
      const q = currentQuiz[currentQuestionIndex];
      if (idx < q.shuffledOptions.length) {
        const isCorrect = q.shuffledOptions[idx].isCorrect;
        selectAnswer(isCorrect, null, idx, q);
      }
    }
  }
});

// --- FINISHING & SAVING TESTS ---
function saveQuiz() {
  processQuizEnd(true);
}

function endQuiz() {
  if (isReviewMode) {
    activeHistoryId = null;
    isReviewMode = false;
    document.getElementById("quiz-screen").classList.add("hidden"); // <-- C'est cette ligne qui manquait !
    document.getElementById("main-nav").classList.remove("hidden");
    switchTab("history");
    return;
  }
  processQuizEnd(false);
}

function processQuizEnd(isSaved) {
  document.getElementById("quiz-screen").classList.add("hidden");

  const finalScore = userAnswers.filter(
    (ans) => ans && ans.isCorrect,
  ).length;
  const percentage = Math.round((finalScore / currentQuiz.length) * 100);

  const now = new Date();
  const dateString = `${now.getFullYear()}-${(now.getMonth() + 1).toString().padStart(2, "0")}-${now.getDate().toString().padStart(2, "0")} ${now.getHours().toString().padStart(2, "0")}:${now.getMinutes().toString().padStart(2, "0")}`;

  const elapsedSessionTime = Date.now() - sessionStartTime;

  // Création du squelette ultra-léger (quelques octets par question)
  const lightweightQuiz = currentQuiz.map((q) => ({
    id: q.id,
    order: q.shuffledOptions.map((opt) => opt.originalIndex),
  }));

  const testRecord = {
    id: activeHistoryId,
    status: isSaved ? "saved" : "finished",
    date: dateString,
    score: finalScore,
    total: currentQuiz.length,
    percentage: percentage,
    quizData: lightweightQuiz, // <-- On stocke le squelette ici
    answersData: userAnswers,
    currentIndex: currentQuestionIndex,
    timeData: {
      elapsedSessionTime: elapsedSessionTime,
      totalQuestionTime: totalQuestionTime,
    },
    failedIds: failedQuestionIds,
    themeSelected: document.getElementById("theme-select").value,
    modeSelected: unseenCheckbox.checked
      ? "unseen"
      : pinnedCheckbox.checked
        ? "pinned"
        : "all",
  };

  const existingIdx = testHistory.findIndex(
    (t) => t.id === activeHistoryId,
  );
  if (existingIdx >= 0) {
    testHistory[existingIdx] = testRecord;
  } else {
    testHistory.push(testRecord);
  }

  // --- Limite glissante : On ne garde que les 50 derniers tests ---
  while (testHistory.length > 50) {
    testHistory.shift();
  }

  localStorage.setItem("a320_test_history", JSON.stringify(testHistory));

  if (isSaved) {
    activeHistoryId = null;
    document.getElementById("main-nav").classList.remove("hidden");
    switchTab("history");
    return;
  }

  document.getElementById("result-screen").classList.remove("hidden");
  const circle = document.getElementById("score-circle");
  const msg = document.getElementById("result-message");
  const details = document.getElementById("result-details");

  circle.innerText = `${percentage}%`;
  details.innerText = `You got ${finalScore} correct answer(s) out of ${currentQuiz.length}.`;

  if (percentage >= 75) {
    circle.className = "score-circle pass";
    msg.innerText = "Check passed!";
  } else {
    circle.className = "score-circle fail";
    msg.innerText = "Training required";
  }

  const answeredCount = userAnswers.filter((a) => a !== null).length;
  const avgTime =
    answeredCount > 0
      ? Math.round(totalQuestionTime / answeredCount / 1000)
      : 0;

  const failedDetailsString = userAnswers
    .map((ans, idx) =>
      ans && !ans.isCorrect
        ? `${currentQuiz[idx].id}:${ans.selectedIndex}`
        : null,
    )
    .filter((a) => a !== null)
    .join(", ");

  const payload = {
    score: finalScore,
    totalRequested: currentQuiz.length,
    failedIds: failedQuestionIds.join(", "),
    pinnedIds: pinnedQuestions.join(", "),
    sessionDuration: Math.round(elapsedSessionTime / 1000),
    avgTimePerQuestion: avgTime,
    userId: userId,
    device: getDeviceType(),
    theme: testRecord.themeSelected,
    mode: testRecord.modeSelected,
    answeredCount: answeredCount,
    failedDetails: failedDetailsString,
  };

  const WEBHOOK_URL =
    "https://script.google.com/macros/s/AKfycbz9llmhQchZcEBy7WQ7yGk4RH3Yvxr0tOl79e4Sg07J5XAR91F_t46HpVspGSWK2XicIw/exec";

  fetch(WEBHOOK_URL, {
    method: "POST",
    mode: "no-cors",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  }).catch((err) => console.log("Telemetry send failed", err));

  activeHistoryId = null;
}

// Identifiant de la version du changelog
const CHANGELOG_VERSION = "v1.4_features";

function checkChangelog() {
  const postit = document.getElementById("changelog-postit");
  const hasSeen = localStorage.getItem("a320_changelog_seen");

  // Si la version enregistrée est différente de la version actuelle, on l'affiche
  if (hasSeen !== CHANGELOG_VERSION) {
    postit.classList.remove("hidden");
  }
}

function closeChangelog() {
  document.getElementById("changelog-postit").classList.add("hidden");
  // On enregistre que cette version a été vue
  localStorage.setItem("a320_changelog_seen", CHANGELOG_VERSION);
}

// Appelle checkChangelog() au chargement de la page
window.addEventListener("load", checkChangelog);

function returnToMenu() {
  activeHistoryId = null;
  isReviewMode = false;
  currentQuiz = [];
  userAnswers = [];
  currentQuestionIndex = 0;

  document.getElementById("result-screen").classList.add("hidden");
  document.getElementById("main-nav").classList.remove("hidden");

  switchTab("setup");
}
