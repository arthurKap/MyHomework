import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import Notiflix from 'notiflix';

const dateTimePicker = document.getElementById('datetime-picker');
const startButton = document.querySelector('button[data-start');
const timerFields = {
  days: document.querySelector('span[data-days]'),
  hours: document.querySelector('span[data-hours'),
  minutes: document.querySelector('span[data-minutes]'),
  seconds: document.querySelector('span[data-seconds]'),
};

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    const selectedDate = selectedDates[0];
    if (selectedDate <= new Date()) {
      Notiflix.Notify.failure('Please choose a date in the future');
      startButton.disabled = true;
    } else {
      Notiflix.Notify.success('Valid date selected');
      startButton.disabled = false;
    }
  },
};

flatpickr(dateTimePicker, options);

startButton.addEventListener('click', () => {
  const targetDate = new Date(dateTimePicker.value).getTime();
  const now = new Date().getTime();
  const timeDifference = targetDate - now;

  if (timeDifference <= 0) {
    Notiflix.Notify.failure('Selected time has already passed');
    return;
  }

  const timer = setInterval(() => {
    const timeLeft = convertMs(targetDate - new Date().getTime());
    if (
      timeLeft.days === 0 &&
      timeLeft.hours === 0 &&
      timeLeft.minutes === 0 &&
      timeLeft.seconds === 0
    ) {
      clearInterval(timer);
      Notiflix.Notify.success('Countdown has ended!');
    }
    updateTimerUI(timeLeft);
  }, 1000);
});

function updateTimerUI(timeLeft) {
  for (const [key, value] of Object.entries(timeLeft)) {
    timerFields[key].textContent = addLeadingZero(value);
  }
}

function addLeadingZero(value) {
  return value.toString().padStart(2, 0);
}

function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const days = Math.floor(ms / day);
  const hours = Math.floor((ms % day) / hour);
  const minutes = Math.floor((ms % hour) / minute);
  const seconds = Math.floor((ms % minute) / second);

  return { days, hours, minutes, seconds };
}
