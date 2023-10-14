import throttle from 'lodash.throttle';
const iframe = document.querySelector('#vimeo-player');
const player = new Vimeo.Player(iframe);

player.on('timeupdate', throttle(setLocalStorage, 2000));

function setLocalStorage(data) {
  const currentTime = data.seconds;
  localStorage.setItem('videoCurrentTime', currentTime);
}

player
  .setCurrentTime(localStorage.getItem('videoCurrentTime'))
  .catch(function (error) {
    switch (error.name) {
      case 'RangeError':
        break;

      default:
        break;
    }
  });
