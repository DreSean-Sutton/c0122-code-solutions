/* exported todos */

var todos = [];

window.addEventListener('beforeunload', saveToLocalStorage);

function saveToLocalStorage(event) {
  var todosJSON = JSON.stringify(todos);
  localStorage.setItem('javascript-local-storage', todosJSON);
}

var previousTodosJSON = localStorage.getItem('javascript-local-storage');
if (previousTodosJSON !== null) {
  todos = JSON.parse(previousTodosJSON);
}
