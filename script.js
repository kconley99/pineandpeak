// Form submission confirmation
const form = document.getElementById('contact-form');

form.addEventListener('submit', function(e) {
  e.preventDefault();
  alert('Thank you for contacting us! We will respond at our earliest convenience.');
  form.reset(); // Optional: clear the form after submission
});