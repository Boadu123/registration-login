// Get form element by id
const registerForm = document.querySelector("#register");
// Handle form submit event
registerForm.addEventListener("submit", function(event) {
  event.preventDefault();
  // Collect form data
  const formData = new FormData(registerForm);
  // Send data to backend
  // display success message to user
  const messageH1 = document.querySelector('#message');
  messageH1.textContent = 'Account registered successfully'
});

// declare variable age
// let age = 71
// define square age function
function squareAge (age) {
  let new_age = age * age
  console.log(new_age)
}

squareAge(56)