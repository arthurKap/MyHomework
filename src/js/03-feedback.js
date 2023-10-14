import throttle from 'lodash.throttle';
const formEl = document.querySelector('.feedback-form');
const localStorageObj = {};

function setData(event) {
  event.preventDefault();
  console.log('hello');
  localStorageObj.email = formEl.elements.email.value;
  localStorageObj.message = formEl.elements.message.value;
  localStorage.setItem('feedback-form-state', JSON.stringify(localStorageObj));
}


formEl.addEventListener('input', throttle(setData, 2000));


window.addEventListener('DOMContentLoaded', () => {
  if (localStorage.getItem('feedback-form-state')) {
    const localStorageObj = localStorage.getItem('feedback-form-state');
    const formData = JSON.parse(localStorageObj);
    formEl.elements.email.value = formData.email;
    formEl.elements.message.value = formData.message;
  }
});

formEl.addEventListener('submit', event => {
  event.preventDefault();
  localStorage.clear();
  formEl.reset();
  console.log(localStorageObj);
});
