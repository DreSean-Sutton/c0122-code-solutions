var $container = document.querySelector('#container');
var $lightbulb = document.querySelector('#lightbulb');
var lightbulbIsOn = true;

$lightbulb.addEventListener('click', lightbulbToggle);
function lightOn() {
  lightbulbIsOn = true;
  $container.classList.remove('dark-mode');
  $container.classList.add('light-mode');
  $lightbulb.classList.remove('dark-mode');
  $lightbulb.classList.add('light-mode');
}

function lightOff() {
  lightbulbIsOn = false;
  $container.classList.add('dark-mode');
  $container.classList.remove('light-mode');
  $lightbulb.classList.add('dark-mode');
  $lightbulb.classList.remove('light-mode');

}

function lightbulbToggle(event) {
  if (lightbulbIsOn) {
    lightOff();
  } else {
    lightOn();
  }
}
