var contact = document.querySelector('#contact-form');

function submit(event) {
  event.preventDefault();
  var userInput = {
    name: contact.elements.name.value,
    email: contact.elements.email.value,
    message: contact.elements.message.value
  };
  console.log('userInput:', userInput);
  contact.reset();
}

contact.addEventListener('submit', submit);
