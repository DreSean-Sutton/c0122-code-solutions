/* eslint-disable no-useless-return */
var $allTabs = document.querySelectorAll('.tab');
var $allViews = document.querySelectorAll('.view');
var $tabContainer = document.querySelector('.tab-container');

$tabContainer.addEventListener('click', viewSwapping);

function viewSwapping(event) {
  if (!event.target.matches('.tab')) {
    return;
  }
  var targetAttribute = event.target.getAttribute('data-view');

  for (var i = 0; i < $allTabs.length; i++) {
    if (event.target === $allTabs[i]) {
      $allTabs[i].classList.add('active');
    } else {
      $allTabs[i].classList.remove('active');
    }
  }
  for (var j = 0; j < $allViews.length; j++) {
    if (targetAttribute === $allViews[j].getAttribute('data-view')) {
      $allViews[j].classList.remove('hidden');
    } else {
      $allViews[j].classList.add('hidden');
    }
  }
}
