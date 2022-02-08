var $contactForm = document.querySelector('#contact-form');

$contactForm.addEventListener('submit', formSubmit);

function formSubmit(event) {

  event.preventDefault();
  var formValues = {
    userName: $contactForm.elements.name.value,
    email: $contactForm.elements.email.value,
    message: $contactForm.elements.message.value
  };
  console.log('formValues Results: ', formValues);
  $contactForm.reset();
}
