import Notiflix from 'notiflix';

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  });
}

const formEL = document.querySelector('.form');

formEL.addEventListener('submit', e => {
  e.preventDefault();

  let firstDelayValue = parseInt(
    document.querySelector('input[name="delay"]').value
  );
  const delayStepValue = parseInt(
    document.querySelector('input[name="step"]').value
  );
  const amountValue = parseInt(
    document.querySelector('input[name="amount"]').value
  );

  for (let i = 1; i <= amountValue; i++) {
    createPromise(i, firstDelayValue)
      .then(({ position, delay }) => {
        Notiflix.Notify.success(`Fulfilled promise ${position} in ${delay}ms`);
      })
      .catch(({ position, delay }) => {
        Notiflix.Notify.failure(`Fulfilled promise ${position} in ${delay}ms`);
      });
    firstDelayValue += delayStepValue;
  };
});
