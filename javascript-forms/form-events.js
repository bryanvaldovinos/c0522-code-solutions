var input1 = document.querySelector('#user-name');
var input2 = document.querySelector('#user-email');
var textArea = document.querySelector('#user-message');

function handleFocus(event) {
  console.log('focus event fired');
  console.log('event.target.name', event.target.name);
}

function handleBlur(event) {
  console.log('blur event fired');
  console.log('event.target.name', event.target.name);
}

function handleInput(event) {
  console.log(event.target.name, event.target.value);
}

input1.addEventListener('focus', handleFocus);
input1.addEventListener('blur', handleBlur);
input1.addEventListener('input', handleInput);
input2.addEventListener('focus', handleFocus);
input2.addEventListener('blur', handleBlur);
input2.addEventListener('input', handleInput);
textArea.addEventListener('focus', handleFocus);
textArea.addEventListener('blur', handleBlur);
textArea.addEventListener('input', handleInput);
