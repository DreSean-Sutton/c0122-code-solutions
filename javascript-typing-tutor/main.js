var currentLetterIndex = 0;
var correctLetters = 0;
var wrongLetters = 0;
var allAttempts = 0;

var $allSpans = document.querySelectorAll('span');
var $modal = document.querySelector('#modal');
var $overlay = document.querySelector('#overlay');
var $noButton = document.querySelector('#no-button');
var $yesButton = document.querySelector('#yes-button');
var $correctAnswers = document.querySelector('#correct-answers');
var $wrongAnswers = document.querySelector('#wrong-answers');
var $statsButton = document.querySelector('#stats-button');
var $resetButton = document.querySelector('#reset-button');
var $backupResetButton = document.querySelector('#backup-reset-button');
var $accuracy = document.querySelector('#accuracy');
var resetButton = true;
// eslint-disable-next-line no-unused-vars
var backupResetButton = false;

document.addEventListener('keydown', typingTutor);
$statsButton.addEventListener('click', handleShowStats);
$noButton.addEventListener('click', closeModal);
$yesButton.addEventListener('click', resetGame);
$resetButton.addEventListener('click', resetGame);
$backupResetButton.addEventListener('click', resetGame);

function handleShowStats(event) {
  if (event.target === $statsButton) {
    openModal();
  }
}

function openModal() {
  $modal.classList.remove('hidden');
  $modal.classList.add('modal-animation');
  $overlay.classList.remove('hidden');
  $overlay.classList.add('overlay-animation');
}

function typingTutor(event) {

  $allSpans[currentLetterIndex].classList.add('border-bottom');
  allAttempts++;
  if (event.key === $allSpans[currentLetterIndex].textContent) {
    $allSpans[currentLetterIndex].classList.remove('wrong-choice');
    $allSpans[currentLetterIndex].classList.add('correct-choice');
    $allSpans[currentLetterIndex].classList.remove('border-bottom');
    if ($allSpans[currentLetterIndex + 1] !== undefined) {
      $allSpans[currentLetterIndex + 1].classList.add('border-bottom');
    }
    currentLetterIndex++;
    correctLetters++;
  } else {
    $allSpans[currentLetterIndex].classList.add('wrong-choice');
    wrongLetters++;
  }

  if (currentLetterIndex === $allSpans.length) {
    openModal();
    $resetButton.classList.add('hidden');
    $backupResetButton.classList.add('hidden');
    $statsButton.classList.remove('hidden');
    var accuracy = Math.round(100 * (correctLetters / allAttempts));
    $correctAnswers.textContent = `Correct: ${correctLetters}!`;
    $accuracy.textContent = `Accuracy: ${accuracy}%`;
    if (wrongLetters > 0) {
      $wrongAnswers.textContent = `Wrong: ${wrongLetters} 😭`;
    } else {
      $wrongAnswers.textContent = 'Wrong: None! 😍';
    }
  }
}

function closeModal(event) {
  if (event.target === $noButton) {
    $modal.classList.add('hidden');
    $overlay.classList.add('hidden');
  }
}

function resetButtonShifting() {
  if (resetButton === true) {
    $backupResetButton.classList.remove('hidden');
    $resetButton.classList.add('hidden');
    backupResetButton = true;
    resetButton = false;
  } else {
    $backupResetButton.classList.add('hidden');
    $resetButton.classList.remove('hidden');
    backupResetButton = false;
    resetButton = true;
  }
}

function resetGame(event) {
  if (event.target === $yesButton ||
    event.target === $resetButton ||
    event.target === $backupResetButton) {
    currentLetterIndex = 0;
    correctLetters = 0;
    wrongLetters = 0;
    allAttempts = 0;
    $modal.classList.add('hidden');
    $overlay.classList.add('hidden');
    $statsButton.classList.add('hidden');
    resetButtonShifting();
    for (var i = 0; i < $allSpans.length; i++) {
      $allSpans[i].classList.remove('correct-choice');
      if (i > 0) {
        $allSpans[i].classList.remove('wrong-choice', 'border-bottom');
      }
    }
  }
}
