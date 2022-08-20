var index = 0;
var pic = document.querySelectorAll('img');
var dot = document.querySelectorAll('.fa-circle');
var right = document.querySelector('#goright');
var left = document.querySelector('#goleft');
var currID = setInterval(rotate, 1500);

function rotate() {
  index++;
  if (index > 3) {
    index = 0;
  }
  update();
}

function goRight(event) {
  if (index === 3) {
    index = 0;
  } else {
    index++;
  }
  update();
}

function goLeft(event) {
  if (index === 0) {
    index = 3;
  } else {
    index--;
  }
  update();
}

function update() {
  clearInterval(currID);
  for (var h = 0; h < dot.length; h++) {
    var dotIndex = Number(dot[h].dataset.index);
    if (dotIndex === index) {
      dot[h].setAttribute('class', 'fas fa-circle margin-rl');
    } else {
      dot[h].setAttribute('class', 'far fa-circle margin-rl');
    }
  }
  for (var i = 0; i < pic.length; i++) {
    var picIndex = Number(pic[i].dataset.index);
    if (picIndex === index) {
      pic[i].setAttribute('class', '');
    } else {
      pic[i].setAttribute('class', 'hidden');
    }
  }
  currID = setInterval(rotate, 1500);
}

function dotClick(event) {
  var dotIndex = event.target.dataset.index;
  index = Number(dotIndex);
  update();
}

for (var i = 0; i < dot.length; i++) {
  dot[i].addEventListener('click', dotClick);
}

right.addEventListener('click', goRight);
left.addEventListener('click', goLeft);
