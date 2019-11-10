const form = document.getElementById('feedback-form');
const userInput = {};
form.addEventListener('submit', (event) => {
  userInput.firstName = form[0].value;
  userInput.lastName = form[1].value;
  userInput.email = form[2].value;
//   userInput.phone = form[3].value;
//   userInput.message = form[4].value;
//   userInput.isSubscribe = form[5].checked;
  console.log(userInput);
  form.reset();
  addSuccessMsg();
  event.preventDefault();
});

function addSuccessMsg() {
  let el = document.createElement('div');
  el.innerHTML = 'Заявка отправлена.В ближайшее время вам перезвонят';
  el.className = 'alert alert-success mt-3';
  form.after(el);
  removeElement(el, 5000);
}

function removeElement(el, timeout = 5000) {
  setTimeout(() => {
    el.remove();
  }, timeout)
}

const toastMessage = document.getElementById('toast-message');






