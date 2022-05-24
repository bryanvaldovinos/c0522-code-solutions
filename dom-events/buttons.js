function handleClick(event) {
  console.log('button clicked');
  console.log(event);
  console.log(event.target);
}
var newVar = document.querySelector('.click-button');
newVar.addEventListener('click', handleClick);

function handleMouseover(event) {
  console.log('button hovered');
  console.log(event);
  console.log(event.target);
}
var newVar2 = document.querySelector('.hover-button');
newVar2.addEventListener('mouseover', handleMouseover);

function handleDoubleClick(event) {
  console.log('button double-clicked');
  console.log(event);
  console.log(event.target);
}
var newVar3 = document.querySelector('.double-click-button');
newVar3.addEventListener('dblclick', handleDoubleClick);
