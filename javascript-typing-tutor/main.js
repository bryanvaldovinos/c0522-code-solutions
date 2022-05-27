var span = document.querySelectorAll('span');
var count = 0;
span[count].setAttribute('class', 'underline');

function tutor(event) {
  if (span[count].textContent === event.key) {
    count++;
    span[count - 1].className = 'green';
    span[count].className = 'underline';
  } else if (span[count].textContent !== event.key) {
    span[count].className = 'red underline';
  }
}

document.addEventListener('keydown', tutor);
