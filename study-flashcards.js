const studyFlashcardCardsKey = "a320_study_flashcards_v1";
const studyFlashcardProgressKey = "a320_study_flashcard_progress_v1";
let studyUserCards = loadStudyFlashcardStorage(studyFlashcardCardsKey, []);
let studyCardProgress = loadStudyFlashcardStorage(
  studyFlashcardProgressKey,
  {},
);
let studyCardSourceDeck = [];
let studyCardDeck = [];
let studyCardIndex = 0;
let studyCardFlipped = false;

function loadStudyFlashcardStorage(key, fallback) {
  try {
    return JSON.parse(localStorage.getItem(key) || JSON.stringify(fallback));
  } catch (_error) {
    return fallback;
  }
}

function getStudyFlashcards() {
  return [...studyFlashcardDefaults, ...studyUserCards].map((card) => ({
    ...card,
    seen: studyCardProgress[card.id]?.seen || false,
    pinned: studyCardProgress[card.id]?.pinned || false,
  }));
}

function getStudyCategoryLabel(category) {
  return {
    operations: "Operations",
    tips: "Tips",
    "abnormals-emergency": "Abnormals / Emergency",
  }[category] || category;
}

function getFilteredStudyFlashcards() {
  const category = document.getElementById("study-flashcard-category").value;
  const unseen = document.getElementById("study-flashcard-unseen").checked;
  const pinned = document.getElementById("study-flashcard-pinned").checked;
  return getStudyFlashcards().filter(
    (card) =>
      (category === "all" || card.category === category) &&
      (!unseen || !card.seen) &&
      (!pinned || card.pinned),
  );
}

function setStudyFlashcardFilter(filter) {
  if (filter === "unseen" && document.getElementById("study-flashcard-unseen").checked) {
    document.getElementById("study-flashcard-pinned").checked = false;
  }
  if (filter === "pinned" && document.getElementById("study-flashcard-pinned").checked) {
    document.getElementById("study-flashcard-unseen").checked = false;
  }
  updateStudyFlashcardSummary();
}

function updateStudyFlashcardSummary() {
  const count = getFilteredStudyFlashcards().length;
  document.getElementById("study-flashcard-summary").innerText =
    `${count} flashcard${count === 1 ? "" : "s"} available`;
}

function openStudyFlashcardEditor() {
  document.getElementById("study-flashcard-setup").classList.add("hidden");
  document.getElementById("study-flashcard-editor").classList.remove("hidden");
}

function closeStudyFlashcardEditor() {
  document.getElementById("study-flashcard-editor").classList.add("hidden");
  document.getElementById("study-flashcard-setup").classList.remove("hidden");
  document.getElementById("study-card-editor-status").innerText = "";
}

function saveStudyFlashcard() {
  const category = document.getElementById("study-card-new-category").value;
  const question = document.getElementById("study-card-new-question").value.trim();
  const answer = document.getElementById("study-card-new-answer").value.trim();
  const references = document
    .getElementById("study-card-new-references")
    .value.split("\n")
    .map((reference) => reference.trim())
    .filter(Boolean);
  if (!question || !answer) {
    document.getElementById("study-card-editor-status").innerText =
      "Question and answer are required.";
    return;
  }
  studyUserCards.push({
    id: `user-study-card-${Date.now()}`,
    category,
    question,
    answer,
    references,
    seen: false,
    pinned: false,
  });
  localStorage.setItem(studyFlashcardCardsKey, JSON.stringify(studyUserCards));
  ["study-card-new-question", "study-card-new-answer", "study-card-new-references"]
    .forEach((id) => { document.getElementById(id).value = ""; });
  closeStudyFlashcardEditor();
  updateStudyFlashcardSummary();
}

function shuffleStudyCards(cards) {
  const result = [...cards];
  for (let index = result.length - 1; index > 0; index -= 1) {
    const target = Math.floor(Math.random() * (index + 1));
    [result[index], result[target]] = [result[target], result[index]];
  }
  return result;
}

function startStudyFlashcards() {
  studyCardSourceDeck = getFilteredStudyFlashcards();
  if (!studyCardSourceDeck.length) return;
  studyCardDeck = shuffleStudyCards(studyCardSourceDeck);
  studyCardIndex = 0;
  document.getElementById("study-flashcard-setup").classList.add("hidden");
  document.getElementById("study-flashcard-session").classList.remove("hidden");
  renderStudyFlashcard();
}

function renderStudyFlashcard() {
  const cardData = studyCardDeck[studyCardIndex];
  if (!cardData) return completeStudyFlashcards();
  studyCardFlipped = false;
  const card = document.getElementById("study-card");
  card.classList.remove("flipped");
  card.setAttribute("aria-pressed", "false");
  document.getElementById("study-card-session-category").innerText =
    getStudyCategoryLabel(cardData.category);
  document.getElementById("study-card-progress").innerText =
    `${studyCardIndex + 1} / ${studyCardDeck.length}`;
  document.getElementById("study-card-question").innerText = cardData.question;
  document.getElementById("study-card-answer").innerText = cardData.answer;
  document.getElementById("study-card-references").innerText =
    cardData.references.length
      ? `References: ${cardData.references.join(" · ")}`
      : "No reference provided";
  document.getElementById("study-card-next").disabled = true;
  updateStudyCardPinButton();
}

function saveStudyCardProgress(cardId, patch) {
  studyCardProgress[cardId] = {
    seen: studyCardProgress[cardId]?.seen || false,
    pinned: studyCardProgress[cardId]?.pinned || false,
    ...patch,
  };
  localStorage.setItem(
    studyFlashcardProgressKey,
    JSON.stringify(studyCardProgress),
  );
}

function flipStudyFlashcard() {
  const cardData = studyCardDeck[studyCardIndex];
  if (!cardData) return;
  studyCardFlipped = !studyCardFlipped;
  document.getElementById("study-card").classList.toggle("flipped", studyCardFlipped);
  document.getElementById("study-card").setAttribute("aria-pressed", studyCardFlipped ? "true" : "false");
  document.getElementById("study-card-next").disabled = !studyCardFlipped;
  if (studyCardFlipped) saveStudyCardProgress(cardData.id, { seen: true });
}

function updateStudyCardPinButton() {
  const cardData = studyCardDeck[studyCardIndex];
  const pinned = studyCardProgress[cardData.id]?.pinned || false;
  const button = document.getElementById("study-card-pin");
  button.innerText = pinned ? "★" : "☆";
  button.classList.toggle("pinned", pinned);
}

function toggleStudyFlashcardPin() {
  const cardData = studyCardDeck[studyCardIndex];
  if (!cardData) return;
  saveStudyCardProgress(cardData.id, {
    pinned: !(studyCardProgress[cardData.id]?.pinned || false),
  });
  updateStudyCardPinButton();
}

function nextStudyFlashcard() {
  if (!studyCardFlipped) return;
  studyCardIndex += 1;
  renderStudyFlashcard();
}

function restartStudyFlashcards() {
  studyCardDeck = shuffleStudyCards(studyCardSourceDeck);
  studyCardIndex = 0;
  document.getElementById("study-flashcard-complete").classList.add("hidden");
  document.getElementById("study-flashcard-session").classList.remove("hidden");
  renderStudyFlashcard();
}

function completeStudyFlashcards() {
  document.getElementById("study-flashcard-session").classList.add("hidden");
  document.getElementById("study-flashcard-complete").classList.remove("hidden");
  document.getElementById("study-card-complete-summary").innerText =
    `You reviewed all ${studyCardDeck.length} cards.`;
}

function closeStudyFlashcardSession() {
  document.getElementById("study-flashcard-session").classList.add("hidden");
  document.getElementById("study-flashcard-complete").classList.add("hidden");
  document.getElementById("study-flashcard-setup").classList.remove("hidden");
  updateStudyFlashcardSummary();
}

updateStudyFlashcardSummary();
