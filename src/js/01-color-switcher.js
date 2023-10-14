const buttonsEl = document.querySelectorAll('button');
const buttonStart = buttonsEl[0];
const buttonStop = buttonsEl[1];

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
});
