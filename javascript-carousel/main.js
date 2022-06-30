var index = 0;
var pic = document.querySelectorAll('img');
var dot = document.querySelectorAll('.fa-circle');
var right = document.querySelector('#goright');
var left = document.querySelector('#goleft');
var currID = setInterval(rotate, 1000);

function rotate() {
  if (index > 3) {
    index = 0;
    pic[3].className = 'hidden';
    dot[3].className = 'far fa-circle margin-rl';
  }
  pic[index].className = '';
  dot[index].className = 'fas fa-circle margin-rl';
  if (index > 0) {
    pic[index - 1].className = 'hidden';
    dot[index - 1].className = 'far fa-circle margin-rl';
  }
  index++;
}

function update() {
  clearInterval(currID);
  for (var i = 0; i < pic.length; i++) {
    var picDex = Number(pic[i].dataset.index);
    if (picDex === index) {
      pic[index].className = '';
      dot[index].className = 'fas fa-circle margin-rl';
    } else if (picDex !== index) {
      pic[index].className = 'hidden';
      dot[index].className = 'far fa-circle margin-rl';
    }
  }

  // for (var j = 0; j < dot.length; j++) {

  // }
  rotate();
}

function goRight() {
  index++;
  update();
}

function goLeft() {
}

right.addEventListener('click', goRight);
left.addEventListener('click', goLeft);
