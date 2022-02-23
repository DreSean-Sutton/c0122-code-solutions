var $h1 = document.querySelector('h1');

var myInterval = setInterval(() => {
  if ($h1.textContent === '1') {
    $h1.textContent = '~Earth Beeeelooowww Us~';
    clearInterval(myInterval);
  } else {
    $h1.textContent--;
  }
}, 1000);
