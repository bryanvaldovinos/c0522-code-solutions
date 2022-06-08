var msg = document.querySelector('.message');

function msgSwitch() {
  msg.textContent = 'Hello There';
}

setTimeout(msgSwitch, 2000);
