var list = document.querySelector('.task-list');

function blickie(event) {
  console.log('event.target:', event.target);
  console.log('event.target.tagName:', event.target.tagName);
  if (event.target.tagName === 'BUTTON') {
    var closest = event.target.closest('.task-list-item');
    console.log(closest);
    closest.remove(event.target);
  }
}
list.addEventListener('click', blickie);
