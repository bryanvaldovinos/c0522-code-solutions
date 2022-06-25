var $uList = document.querySelector('#user-list');

var xhr = new XMLHttpRequest();
xhr.open('GET', 'https://jsonplaceholder.typicode.com/users');
xhr.responseType = 'json';
xhr.addEventListener('load', function () {
  for (var i = 0; i < xhr.response.length; i++) {
    var li = xhr.response[i];
    var listName = document.createElement('li');
    listName.textContent = li.name;
    $uList.appendChild(listName);
  }
});

xhr.send();
