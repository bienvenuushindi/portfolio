function showMessage(input, message, type) {
  // get the small element and set the message
  const msg = document.querySelector(".display-error");
  msg.innerText = message;
  // update the class for the input
  input.className = type ? "success" : "error";
  return type;
}

function showError(input, message) {
  return showMessage(input, message, false);
}

function showSuccess(input) {
  return showMessage(input, "", true);
}

function validateEmail(input, invalidMsg) {
  const emailRegex =
      /^[a-z]*@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-z\-0-9]+\.)+[a-z]{2,}))$/;
  
  const email = input.value.trim();
  if (!emailRegex.test(email)) {
    return showError(input, invalidMsg);
  }
  showSuccess(input);
  return true;
}

const form = document.getElementById('contact-form');
const email = form.elements['mail'];
const EMAIL_INVALID = "Please email field content has to be in lower case";

form.addEventListener("submit", function (event) {
  event.preventDefault();
  const emailValid = validateEmail(email, EMAIL_INVALID);
  if (emailValid) {
    form.submit();
  }
});