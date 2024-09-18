const loginForm = document.querySelector("#log");

// console.log(loginForm);

loginForm.addEventListener("submit", function (event) {
  // console.log(event)
  event.preventDefault();

  const formData = new FormData(loginForm);
  console.log(loginForm);

  const messageH1 = document.querySelector("#output");
  messageH1.textContent = "Logged In successfully";
});

// Write fullName function

function fullName (firstName, lastName){
    // let fullName = (firstName + " " + lastName)
    return `${firstName}    ${lastName}`;
    // console.log(fullName)
}

console.log(fullName("Bene", "Boadu"))