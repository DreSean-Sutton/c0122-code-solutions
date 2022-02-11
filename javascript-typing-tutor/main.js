var currentLetterIndex = 0;
var correctLetters = 0;
var wrongLetters = 0;

var $allSpans = document.querySelectorAll('span');
var $testButton = document.querySelector('#test-button');
var $modal = document.querySelector('#modal');
var $overlay = document.querySelector('#overlay');
var $noButton = document.querySelector('#no-button');
var $yesButton = document.querySelector('#yes-button');
var $correctAnswers = document.querySelector('#correct-answers');
var $wrongAnswers = document.querySelector('#wrong-answers');

document.addEventListener('keydown', typingTutor);
$testButton.addEventListener('click', testingButton);
$noButton.addEventListener('click', handleNoButton);
$yesButton.addEventListener('click', handleYesButton);

function testingButton(event) {
  if (event.target === $testButton) {
    $overlay.classList.remove('hidden');
    $modal.classList.remove('hidden');
  }
}

function openModal() {
  $overlay.classList.remove('hidden');
  $modal.classList.remove('hidden');
}

function typingTutor(event) {

  $allSpans[currentLetterIndex].classList.add('border-bottom');
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
    $correctAnswers.textContent = `Correct: ${correctLetters}!`;
    if (wrongLetters > 0) {
      $wrongAnswers.textContent = `Wrong: ${wrongLetters} :(`;
    } else {
      $wrongAnswers.textContent = `Wrong: ${wrongLetters}! :D`;
    }
  }
}

function handleNoButton(event) {
  if (event.target === $noButton) {
    $modal.classList.add('hidden');
    $overlay.classList.add('hidden');
  }
}

function handleYesButton(event) {
  if (event.target === $yesButton) {
    currentLetterIndex = 0;
    correctLetters = 0;
    wrongLetters = 0;
    $modal.classList.add('hidden');
    $overlay.classList.add('hidden');
    for (var i = 0; i < $allSpans.length; i++) {
      $allSpans[i].classList.remove('correct-choice');
      if (i > 0) {
        $allSpans[i].classList.remove('wrong-choice', 'border-bottom');
      }
    }
  }
}
