var $allSpans = document.querySelectorAll('span');
var currentLetterIndex = 0;

document.addEventListener('keydown', typingTutor);

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
