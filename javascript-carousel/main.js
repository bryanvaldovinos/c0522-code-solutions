var cirCont = document.querySelector('.circle-container');
// var circles = document.querySelectorAll('.fa-circle');
var img = document.querySelectorAll('.view');

// var left = document.querySelector('#goleft');
var right = document.querySelector('#goright');

function match(event) {
  // if (event.target.matches('.fa-circle')) {
  //   for (var i = 0; i < circles.length; i++) {
  //     if (circles[i] === event.target) {
  //       circles[i].className = 'fas fa-circle margin-rl';
  //     } else if (circles[i] !== event.target) {
  //       circles[i].className = 'far fa-circle margin-rl';
  //     }
  //   }
  //   if (event.target.matches('.fa-circle')) {
  //     var data = event.target.getAttribute('data-view');
  //     for (var j = 0; j < img.length; j++) {
  //       if (img[j].getAttribute('data-view') === data) {
  //         img[j].className = 'view';
  //       } else if (img[j].getAttribute('data-view') !== data) {
  //         img[j].className = 'view hidden';
  //       }
  //     }
  //   }
  // }
}

// function goLeft(event) {
// //   img[num].className = 'view hidden';
// //   img[num + 1].className = 'view';
// //   num++;
// // }

var num = 0;

function goRight(event) {

  // img[num].className = 'view hidden';
  // img[num + 1].className = 'view';
  // if (num > 3) {

  // } else if (num < 3) {

  // }
  // img[num].className = 'view hidden';
  // img[num + 1].className = 'view';
  num++;
  if (num > 3) {
    num = 0;
    img[num].className = 'view';
    img[num - 1].className = 'view hidden';
  } else {
    img[num - 1].className = 'view hidden';
    img[num].className = 'view';
  }
  // console.log(num);
}

cirCont.addEventListener('click', match);
// left.addEventListener('click', goLeft);
right.addEventListener('click', goRight);
