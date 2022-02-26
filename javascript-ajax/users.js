const $userList = document.querySelector('#user-list');

const userXHR = new XMLHttpRequest();
userXHR.open('GET', 'https://jsonplaceholder.typicode.com/users');
userXHR.responseType = 'json';
userXHR.addEventListener('load', () => {
  console.log('userXHR status:', userXHR.status);
  console.log('userXHR response:', userXHR.response);
  for (let i = 0; i < userXHR.response.length; i++) {
    const $userLI = document.createElement('LI');
    $userList.appendChild($userLI);
    $userLI.textContent = userXHR.response[i].name;
  }
});

userXHR.send();
