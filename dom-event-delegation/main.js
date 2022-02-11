var $taskList = document.querySelector('.task-list');

$taskList.addEventListener('click', taskList);

function taskList(event) {
  console.log('event.target result', event.target);
  if (event.target.tagName === 'BUTTON') {
    event.target.closest('.task-list-item').remove();
  }
}
