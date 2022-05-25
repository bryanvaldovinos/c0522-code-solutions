var open = document.querySelector('.open-button');
var modal = document.querySelector('.modal');
var close = document.querySelector('.modal-button');

function overlay(event) {
  modal.className = 'modal show';
}
function exitOverlay(event) {
  modal.className = 'modal hide';
}

open.addEventListener('click', overlay);
close.addEventListener('click', exitOverlay);
