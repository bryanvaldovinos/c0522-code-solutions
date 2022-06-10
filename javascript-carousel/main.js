var cirCont = document.querySelector('.circle-container');
var circles = document.querySelectorAll('.fa-circle');
var img = document.querySelectorAll('.view');
var left = document.querySelector('#goleft');
var right = document.querySelector('#goright');

function match(event) {
  if (event.target.matches('.fa-circle')) {
    for (var i = 0; i < circles.length; i++) {
      if (circles[i] === event.target) {
        circles[i].className = 'fas fa-circle margin-rl';
      } else if (circles[i] !== event.target) {
        circles[i].className = 'far fa-circle margin-rl';
      }
    }
    if (event.target.matches('.fa-circle')) {
      var data = event.target.getAttribute('data-view');
      for (var j = 0; j < img.length; j++) {
        if (img[j].getAttribute('data-view') === data) {
          img[j].className = 'view';
        } else if (img[j].getAttribute('data-view') !== data) {
          img[j].className = 'view hidden';
        }
      }
    }
  }
}

var numLeft = 0;
var we = 3;
function goLeft(event) {
  if (numLeft > -4) {
    img[numLeft + we].className = 'view';
    circles[numLeft + we].className = 'fas fa-circle margin-rl';
    if (numLeft === 0) {
      img[numLeft].className = 'view hidden';
      circles[numLeft].className = 'far fa-circle margin-rl';
    } else if (numLeft < 0) {
      we += 1;
      img[numLeft + we].className = 'view hidden';
      circles[numLeft + we].className = 'far fa-circle margin-rl';
      we--;
    }
    numLeft--;
  } else if (numLeft === -4) {
    img[0].className = 'view';
    img[1].className = 'view hidden';
    img[2].className = 'view hidden';
    img[3].className = 'view hidden';
    circles[0].className = 'fas fa-circle margin-rl';
    circles[1].className = 'far fa-circle margin-rl';
    circles[2].className = 'far fa-circle margin-rl';
    circles[3].className = 'far fa-circle margin-rl';
    numLeft = 0;
  }
}

var numRight = 0;
function goRight(event) {
  if (numRight < 3) {
    img[numRight].className = 'view hidden';
    img[numRight + 1].className = 'view';
    circles[numRight].className = 'far fa-circle margin-rl';
    circles[numRight + 1].className = 'fas fa-circle margin-rl';
    numRight++;
  } else if (numRight === 3) {
    numRight = 0;
    img[0].className = 'view';
    img[1].className = 'view hidden';
    img[2].className = 'view hidden';
    img[3].className = 'view hidden';
    circles[0].className = 'fas fa-circle margin-rl';
    circles[1].className = 'far fa-circle margin-rl';
    circles[2].className = 'far fa-circle margin-rl';
    circles[3].className = 'far fa-circle margin-rl';
  }
}

cirCont.addEventListener('click', match);
left.addEventListener('click', goLeft);
right.addEventListener('click', goRight);
