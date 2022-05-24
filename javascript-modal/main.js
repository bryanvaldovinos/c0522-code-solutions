var open = document.querySelector('.open-button');
var modal = document.querySelector('.modal');
var close = document.querySelector('.modal-button');

function overlay(event) {
  modal.style.display = 'block';
}
function exitOverlay(event) {
  modal.style.display = 'none';
}

open.addEventListener('click', overlay);
close.addEventListener('click', exitOverlay);
