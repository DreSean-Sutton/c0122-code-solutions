var $allSpans = document.querySelectorAll('span');
var currentLetterIndex = 0;

document.addEventListener('keydown', typingTutor);

function typingTutor(event) {
  $allSpans[currentLetterIndex].classList.add('border-bottom');
  if (event.key === $allSpans[currentLetterIndex].textContent) {
    $allSpans[currentLetterIndex].classList.remove('wrong-choice');
    $allSpans[currentLetterIndex].classList.add('correct-choice');
    $allSpans[currentLetterIndex].classList.remove('border-bottom');
    $allSpans[currentLetterIndex + 1].classList.add('border-bottom');
    currentLetterIndex++;
  } else {
    $allSpans[currentLetterIndex].classList.add('wrong-choice');
  }
}
