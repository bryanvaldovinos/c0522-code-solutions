var mainButton = document.querySelector('.dark-button');
var background = document.querySelector('.black-bg');
var lightBulb = true;

function click(event) {
  if (lightBulb === true) {
    background.className = 'black-bg';
    mainButton.className = 'dark-button';
    lightBulb = false;
  } else if (lightBulb === false) {
    background.className = 'light-bg';
    mainButton.className = 'light-button';
    lightBulb = true;
  }
}

mainButton.addEventListener('click', click);
