var count = 0;
var mainButton = document.querySelector('.dark-button');
var background = document.querySelector('.black-bg');
function click(event) {
  count++;
  if (count % 2 > 0) {
    mainButton.className = 'light-button';
    background.className = 'light-bg';
  } else if (count % 2 === 0) {
    mainButton.className = 'dark-button';
    background.className = 'black-bg';
  }
}

mainButton.addEventListener('click', click);
