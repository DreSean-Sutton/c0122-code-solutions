var $modal = document.querySelector('#modal');
var $openModal = document.querySelector('#open-modal');
var $surveyButton = document.querySelector('#survey-button');
var modalShowing = false;

$openModal.addEventListener('click', openModal);
$surveyButton.addEventListener('click', closeModal);

function showModal() {
  modalShowing = true;
  $modal.classList.remove('slow-close');
  $modal.classList.add('slow-open');
}

function hideModal() {
  modalShowing = false;
  $modal.classList.remove('slow-open');
  $modal.classList.add('slow-close');
}

function openModal(event) {
  if (!modalShowing) {
    showModal();
  }
}

function closeModal(event) {
  if (modalShowing) {
    hideModal();
  }
}
