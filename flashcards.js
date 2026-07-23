let flashcardSourcePool = [];
let flashcardDeck = [];
let flashcardIndex = 0;
let flashcardFlipped = false;
let flashcardMarkedSeen = false;
let activeFlashcardTheme = "all";

function toggleMonkeyMode() {
  const monkeyMode = document.getElementById("monkey-mode").checked;
  document
    .getElementById("question-count-group")
    .classList.toggle("hidden", !monkeyMode);
  document.getElementById("training-mode-description").innerText = monkeyMode
    ? "Multiple-choice training"
    : "Question and answer flashcards";
  document.getElementById("training-title").innerText = monkeyMode
    ? "A320 Monkey Training"
    : "A320 Theoretical Exam Flashcards";
  document.getElementById("start-training-btn").innerText = monkeyMode
    ? "Start Training"
    : "Start Flashcards";
}

function startTraining() {
  if (document.getElementById("monkey-mode").checked) {
    startQuiz();
    return;
  }
  startFlashcards();
}

function getFilteredFlashcardPool() {
  let pool = [...db];
  activeFlashcardTheme = themeSelect.value;
  if (activeFlashcardTheme !== "all") {
    pool = pool.filter(
      (question) => question.theme === activeFlashcardTheme,
    );
  }
  if (unseenCheckbox.checked) {
    pool = pool.filter(
      (question) => !seenQuestions.includes(question.id),
    );
    if (!pool.length) {
      alert("You have already seen all the questions in this selection!");
      return [];
    }
  } else if (pinnedCheckbox.checked) {
    pool = pool.filter(
      (question) => pinnedQuestions.includes(question.id),
    );
    if (!pool.length) {
      alert("You don't have any pinned questions in this selection!");
      return [];
    }
  }
  if (!pool.length) {
    alert("No questions available for this theme.");
  }
  return pool;
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
  const pool = getFilteredFlashcardPool();
  if (!pool.length) return;
  flashcardSourcePool = [...pool];
  flashcardDeck = shuffleFlashcards(flashcardSourcePool);
  flashcardIndex = 0;
  showFlashcardSession();
  renderFlashcard();
}

function showFlashcardSession() {
  document.getElementById("app").classList.add("exam-flashcard-mode");
  document.getElementById("tab-setup").classList.add("hidden");
  document.getElementById("main-nav").classList.add("hidden");
  document.getElementById("exam-flashcard-complete").classList.add("hidden");
  document
    .getElementById("exam-flashcard-session")
    .classList.remove("hidden");
  const filterLabel = unseenCheckbox.checked
    ? " · Unseen"
    : pinnedCheckbox.checked
      ? " · Pinned"
      : "";
  document.getElementById("flashcard-session-theme").innerText =
    `${activeFlashcardTheme === "all" ? "All themes" : activeFlashcardTheme}${filterLabel}`;
}

function renderFlashcard() {
  const question = flashcardDeck[flashcardIndex];
  if (!question) {
    completeFlashcards();
    return;
  }
  flashcardFlipped = false;
  flashcardMarkedSeen = false;
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
  updateFlashcardPinButton();
  const nextButton = document.getElementById("flashcard-next");
  nextButton.disabled = true;
  nextButton.innerText =
    flashcardIndex === flashcardDeck.length - 1
      ? "Finish deck →"
      : "Next card →";
}

function updateFlashcardPinButton() {
  const button = document.getElementById("flashcard-pin");
  const questionId = flashcardDeck[flashcardIndex]?.id;
  const isPinned = pinnedQuestions.includes(questionId);
  button.classList.toggle("pinned", isPinned);
  button.classList.toggle("unpinned", !isPinned);
  button.innerText = isPinned ? "★" : "☆";
  button.title = isPinned ? "Unpin this question" : "Pin this question";
  button.setAttribute("aria-label", button.title);
}

function toggleFlashcardPin() {
  const questionId = flashcardDeck[flashcardIndex]?.id;
  if (questionId == null) return;
  if (pinnedQuestions.includes(questionId)) {
    pinnedQuestions = pinnedQuestions.filter((id) => id !== questionId);
  } else {
    pinnedQuestions.push(questionId);
  }
  localStorage.setItem(
    "a320_pinned_questions",
    JSON.stringify(pinnedQuestions),
  );
  document.getElementById("pinned-stats").innerText =
    pinnedQuestions.length;
  updateFlashcardPinButton();
  updateSliderMax();
}

function markCurrentFlashcardSeen() {
  if (flashcardMarkedSeen) return;
  flashcardMarkedSeen = true;
  const questionId = flashcardDeck[flashcardIndex]?.id;
  if (questionId == null || seenQuestions.includes(questionId)) return;
  seenQuestions.push(questionId);
  localStorage.setItem(
    "a320_seen_questions",
    JSON.stringify(seenQuestions),
  );
  document.getElementById("seen-stats").innerText = seenQuestions.length;
}

function flipFlashcard() {
  if (!flashcardDeck.length) return;
  flashcardFlipped = !flashcardFlipped;
  if (flashcardFlipped) markCurrentFlashcardSeen();
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
  if (!flashcardSourcePool.length) return;
  flashcardDeck = shuffleFlashcards(flashcardSourcePool);
  flashcardIndex = 0;
  showFlashcardSession();
  renderFlashcard();
}

function completeFlashcards() {
  document.getElementById("exam-flashcard-session").classList.add("hidden");
  document
    .getElementById("exam-flashcard-complete")
    .classList.remove("hidden");
  document.getElementById("flashcard-complete-summary").innerText =
    `You reviewed all ${flashcardDeck.length} cards in ${
      activeFlashcardTheme === "all" ? "All themes" : activeFlashcardTheme
    }.`;
}

function closeFlashcardSession() {
  flashcardSourcePool = [];
  flashcardDeck = [];
  flashcardIndex = 0;
  flashcardFlipped = false;
  document.getElementById("exam-flashcard-session").classList.add("hidden");
  document.getElementById("exam-flashcard-complete").classList.add("hidden");
  document.getElementById("app").classList.remove("exam-flashcard-mode");
  document.getElementById("main-nav").classList.remove("hidden");
  updateSliderMax();
  switchTab("setup");
}

toggleMonkeyMode();
