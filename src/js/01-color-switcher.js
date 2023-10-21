const buttonStart = document.querySelector('button[data-start]');
const buttonStop = document.querySelector('button[data-stop]');

let intervalDicrimentId;
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function getRandomBackColor() {
  document.body.style.background = getRandomHexColor();
}

buttonStart.addEventListener('click', () => {
  intervalDicrimentId = setInterval(getRandomBackColor, 1000, 1000);
  buttonStart.disabled = true;
});

buttonStop.addEventListener('click', () => {
  clearInterval(intervalDicrimentId);
  buttonStart.disabled = false;
  document.body.style.background = '';
});
