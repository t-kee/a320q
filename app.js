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

let activeCockpitPanel = null;
let cockpitZoom = 1;
let cockpitLabelsVisible = false;
const cockpitPointers = new Map();
let cockpitDragStart = null;
let cockpitPinchStart = null;

function renderCockpitPanelCards() {
  const container = document.getElementById("cockpit-panel-cards");
  if (!container || typeof cockpitPanels === "undefined") return;

  container.innerHTML = Object.entries(cockpitPanels)
    .map(
      ([panelId, panel]) => `
        <button
          class="cockpit-panel-card"
          onclick="openCockpitPanel('${panelId}')"
        >
          <span class="cockpit-card-image">
            <img src="${panel.image}" alt="${panel.label} panel" />
          </span>
          <span class="cockpit-card-copy">
            <strong>${panel.label}</strong>
            <span>${panel.hotspots.length} mapped controls →</span>
          </span>
        </button>
      `,
    )
    .join("");
}

function openCockpitPanel(panelId) {
  const panel = cockpitPanels[panelId];
  if (!panel) return;

  activeCockpitPanel = panelId;
  cockpitZoom = 1;
  document.getElementById("cockpit-panel-picker").classList.add("hidden");
  document.getElementById("cockpit-panel-viewer").classList.remove("hidden");
  document.getElementById("cockpit-panel-title").innerText = panel.label;

  const image = document.getElementById("cockpit-image");
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
          onclick="showCockpitControl('${id}')"
          data-control-id="${id}"
          data-control-name="${label}"
          data-control-group="${group}"
        ></button>
      `;
    })
    .join("");
  hotspots.classList.toggle("show-labels", cockpitLabelsVisible);

  updateCockpitZoom();
  const viewport = document.getElementById("cockpit-viewport");
  viewport.scrollTop = 0;
  viewport.scrollLeft = 0;
}

function closeCockpitPanel() {
  activeCockpitPanel = null;
  document.getElementById("cockpit-panel-viewer").classList.add("hidden");
  document.getElementById("cockpit-panel-picker").classList.remove("hidden");
  closeCockpitControl();
}

function updateCockpitZoom(anchorX, anchorY, previousZoom = cockpitZoom) {
  const canvas = document.getElementById("cockpit-canvas");
  const viewport = document.getElementById("cockpit-viewport");
  canvas.style.width = `${cockpitZoom * 100}%`;
  document.getElementById("cockpit-zoom-value").value =
    `${Math.round(cockpitZoom * 100)}%`;

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

renderCockpitPanelCards();
setupCockpitGestures();

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
