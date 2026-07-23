let flashcardDeck = [];
let flashcardIndex = 0;
let flashcardFlipped = false;
let activeFlashcardTheme = "all";

function initializeFlashcards() {
  const select = document.getElementById("flashcard-theme");
  if (!select || typeof db === "undefined") return;
  const themes = [...new Set(db.map((question) => question.theme))]
    .filter(Boolean)
    .sort((left, right) => left.localeCompare(right));
  select.innerHTML = [
    '<option value="all">All themes</option>',
    ...themes.map(
      (theme) =>
        `<option value="${escapeFlashcardHtml(theme)}">${escapeFlashcardHtml(theme)}</option>`,
    ),
  ].join("");
  updateFlashcardPoolSummary();
}

function escapeFlashcardHtml(value) {
  return String(value || "")
    .replace(/&/g, "&amp;")
    .replace(/"/g, "&quot;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

function getFlashcardPool(theme) {
  return theme === "all"
    ? [...db]
    : db.filter((question) => question.theme === theme);
}

function updateFlashcardPoolSummary() {
  const select = document.getElementById("flashcard-theme");
  const summary = document.getElementById("flashcard-pool-summary");
  if (!select || !summary) return;
  const count = getFlashcardPool(select.value).length;
  summary.innerText = `${count} card${count === 1 ? "" : "s"} in this deck`;
}

function shuffleFlashcards(cards) {
  const shuffled = [...cards];
  for (let index = shuffled.length - 1; index > 0; index -= 1) {
    const randomIndex = Math.floor(Math.random() * (index + 1));
    [shuffled[index], shuffled[randomIndex]] = [
      shuffled[randomIndex],
      shuffled[index],
    ];
  }
  return shuffled;
}

function startFlashcards() {
  const select = document.getElementById("flashcard-theme");
  activeFlashcardTheme = select?.value || "all";
  const pool = getFlashcardPool(activeFlashcardTheme);
  if (!pool.length) return;
  flashcardDeck = shuffleFlashcards(pool);
  flashcardIndex = 0;
  showFlashcardSession();
  renderFlashcard();
}

function showFlashcardSession() {
  document.getElementById("flashcard-setup").classList.add("hidden");
  document.getElementById("flashcard-complete").classList.add("hidden");
  document.getElementById("flashcard-session").classList.remove("hidden");
  document.getElementById("flashcard-session-theme").innerText =
    activeFlashcardTheme === "all" ? "All themes" : activeFlashcardTheme;
}

function renderFlashcard() {
  const question = flashcardDeck[flashcardIndex];
  if (!question) {
    completeFlashcards();
    return;
  }
  flashcardFlipped = false;
  const card = document.getElementById("flashcard-card");
  card.classList.remove("flipped");
  card.setAttribute("aria-pressed", "false");
  card.setAttribute("aria-label", "Show answer");
  document.getElementById("flashcard-question").innerText = question.question;
  document.getElementById("flashcard-answer").innerText =
    question.options[question.correct];
  document.getElementById("flashcard-explanation").innerHTML =
    question.explanation || "";
  document.getElementById("flashcard-progress").innerText =
    `${flashcardIndex + 1} / ${flashcardDeck.length}`;
  const nextButton = document.getElementById("flashcard-next");
  nextButton.disabled = true;
  nextButton.innerText =
    flashcardIndex === flashcardDeck.length - 1
      ? "Finish deck →"
      : "Next card →";
}

function flipFlashcard() {
  if (!flashcardDeck.length) return;
  flashcardFlipped = !flashcardFlipped;
  const card = document.getElementById("flashcard-card");
  card.classList.toggle("flipped", flashcardFlipped);
  card.setAttribute("aria-pressed", flashcardFlipped ? "true" : "false");
  card.setAttribute(
    "aria-label",
    flashcardFlipped ? "Show question" : "Show answer",
  );
  document.getElementById("flashcard-next").disabled = !flashcardFlipped;
}

function nextFlashcard() {
  if (!flashcardFlipped) return;
  flashcardIndex += 1;
  renderFlashcard();
}

function restartFlashcards() {
  const pool = getFlashcardPool(activeFlashcardTheme);
  if (!pool.length) return;
  flashcardDeck = shuffleFlashcards(pool);
  flashcardIndex = 0;
  showFlashcardSession();
  renderFlashcard();
}

function completeFlashcards() {
  document.getElementById("flashcard-session").classList.add("hidden");
  document.getElementById("flashcard-complete").classList.remove("hidden");
  document.getElementById("flashcard-complete-summary").innerText =
    `You reviewed all ${flashcardDeck.length} cards in ${
      activeFlashcardTheme === "all" ? "All themes" : activeFlashcardTheme
    }.`;
}

function closeFlashcardSession() {
  flashcardDeck = [];
  flashcardIndex = 0;
  flashcardFlipped = false;
  document.getElementById("flashcard-session").classList.add("hidden");
  document.getElementById("flashcard-complete").classList.add("hidden");
  document.getElementById("flashcard-setup").classList.remove("hidden");
  updateFlashcardPoolSummary();
}
