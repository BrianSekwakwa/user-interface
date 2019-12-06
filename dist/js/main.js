// Initialization
const inputs = document.querySelectorAll(".form-fields input");
const form = document.querySelector("form");
const passwordError = document.querySelector(" .error-password");
const emailError = document.querySelector(".error-email");

// Regular Expressions patterns
const patterns = {
  password: /^[\w@-]{8,20}$/,
  email: /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/
};

// Error messages object to use to display errors if user entered incorrect form of password and email
const errorMessages = {
  email: emailError,
  password: passwordError
};

// The validate fuction to check if the email and password are in the correct form
function validate(target) {
  const { name, value } = target;
  let regEx = patterns[name];

  if (regEx.test(value)) {
    target.className = "valid";
    errorMessages[target.name].style.display = "none";
  } else {
    target.className = "invalid";
    errorMessages[target.name].style.display = "block";
  }
}

// Validating on submit
form.addEventListener("submit", e => {
  let emailTarget = e.target[0];
  let passwordTarget = e.target[1];
  validate(emailTarget);
  validate(passwordTarget);
  e.preventDefault();
});

// Looping through the form field inputs
inputs.forEach(input => {
  input.addEventListener("blur", e => {
    let target = e.target;
    validate(target);
  });
});
