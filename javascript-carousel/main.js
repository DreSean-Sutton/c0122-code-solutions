let currentPicIndex = 0;
const intervalId = null;

const manageCarousel = {
  leftArrow: handleLeftArrow,
  rightArrow: handleRightArrow,
  circles: handleCircles,
  imageSwap: handleImageSwap,
  interval: intervalTimer
};

const $leftArrow = document.querySelector('#left-arrow');
const $rightArrow = document.querySelector('#right-arrow');
const $pokemonImageDivs = document.querySelectorAll('.img-layout');
const $circleParent = document.querySelector('#circle-parent');
const $circles = document.querySelectorAll('.circle-div');

$leftArrow.addEventListener('click', manageCarousel.leftArrow);
$rightArrow.addEventListener('click', manageCarousel.rightArrow);
$circleParent.addEventListener('click', manageCarousel.circles);

manageCarousel.interval(intervalId);

function handleLeftArrow(event) {
  if (currentPicIndex === 0) {
    currentPicIndex = $pokemonImageDivs.length - 1;
  } else {
    currentPicIndex--;
  }
  manageCarousel.imageSwap();
  clearInterval(intervalId);
  manageCarousel.interval(intervalId);
}

function handleRightArrow(event) {
  if (currentPicIndex === $pokemonImageDivs.length - 1) {
    currentPicIndex = 0;
  } else {
    currentPicIndex++;
  }
  manageCarousel.imageSwap();
  clearInterval(intervalId);
  manageCarousel.interval(intervalId);
}

function handleCircles(event) {
  if (!event.target.matches('.circle-div')) {
    return;
  }
  currentPicIndex = event.target.dataset.circleIndex * 1;
  manageCarousel.imageSwap();
  clearInterval(intervalId);
  manageCarousel.interval(intervalId);
}

function handleImageSwap() {
  for (let i = 0; i < $pokemonImageDivs.length; i++) {
    if ($pokemonImageDivs[i].dataset.imgIndex * 1 === currentPicIndex) {
      $pokemonImageDivs[i].classList.remove('hidden');
    } else {
      $pokemonImageDivs[i].classList.add('hidden');
    }
    if ($circles[i].dataset.circleIndex * 1 === currentPicIndex) {
      $circles[i].classList.add('black-circle');
    } else {
      $circles[i].classList.remove('black-circle');
    }
  }
  clearInterval(intervalId);
  manageCarousel.interval(intervalId);
}

function intervalTimer(id) {
  id = setInterval(() => {
    manageCarousel.rightArrow();
  }, 1000);
}
