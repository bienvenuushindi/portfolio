//form and email field elements are declared in validate.js
const fullName = form.elements.name;
const msg = form.elements.message;
function setFormData() {
  const currentContactName = localStorage.getItem('contactName');
  const currentContactEmail = localStorage.getItem('contactEmailAddress');
  const currentContactMessage = localStorage.getItem('contactMessage');
  fullName.value = currentContactName;
  email.value = currentContactEmail;
  msg.value = currentContactMessage;
  
}

function populateStorage() {
  localStorage.setItem('contactName', fullName.value);
  localStorage.setItem('contactEmailAddress', email.value);
  localStorage.setItem('contactMessage', msg.value);
  
  setFormData();
}

if (!localStorage.getItem('contactName')) {
  populateStorage();
} else {
  setFormData();
}

fullName.onchange = populateStorage;
email.onchange = populateStorage;
msg.onchange = populateStorage;
