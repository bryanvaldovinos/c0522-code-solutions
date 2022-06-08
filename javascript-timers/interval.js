var countDown = document.querySelector('.countdown-display');
var start = Number(countDown.textContent);
var ID = setInterval(countDrop, 1000);

function countDrop() {
  countDown.textContent = start - 1;
  start = Number(countDown.textContent);
  if (start === 0) {
    countDown.textContent = '~Earth Beeeelooowww Us~';
    clearInterval(ID);
  }
}
