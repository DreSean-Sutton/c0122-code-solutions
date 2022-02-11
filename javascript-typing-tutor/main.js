var $allSpans = document.querySelectorAll('span');
var currentLetterIndex = 0;
var $testButton = document.querySelector('#test-button');
var $modal = document.querySelector('#modal');
var $overlay = document.querySelector('#overlay');
var $noButton = document.querySelector('#no-button');
// var $yesButton = document.querySelector('#yes-button')

document.addEventListener('keydown', typingTutor);
$testButton.addEventListener('click', testingButton);
$noButton.addEventListener('click', handleNoButton);

function testingButton(event) {
  if (event.target === $testButton) {
    $overlay.classList.remove('hidden');
    $modal.classList.remove('hidden');
  }
}

function typingTutor(event) {
  if (currentLetterIndex === $allSpans.length) {
    return;
  }

  $allSpans[currentLetterIndex].classList.add('border-bottom');
  if (event.key === $allSpans[currentLetterIndex].textContent) {
    $allSpans[currentLetterIndex].classList.remove('wrong-choice');
    $allSpans[currentLetterIndex].classList.add('correct-choice');
    $allSpans[currentLetterIndex].classList.remove('border-bottom');
    if ($allSpans[currentLetterIndex + 1] !== undefined) {
      $allSpans[currentLetterIndex + 1].classList.add('border-bottom');
    }
    currentLetterIndex++;
  } else {
    $allSpans[currentLetterIndex].classList.add('wrong-choice');
  }
  if ($allSpans[$allSpans.length - 1].classList === 'correct-choice border-bottom') {
    currentLetterIndex = 0;
    for (var i = 0; i < $allSpans.length; i++) {
      $allSpans[i].classList.remove('correct-choice');
      if (i > 0) {
        $allSpans[i].classList.remove('wrong-choice border-bottom');
      }
    }
  }
}

function handleNoButton(event) {
  if (event.target === $noButton) {
    $modal.classList.add('hidden');
    $overlay.classList.add('hidden');
  }
}
