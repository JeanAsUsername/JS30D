
window.addEventListener('keydown', playSound)

function playSound(e) {

  var key = document.querySelector(`.buttom[data-key="${e.keyCode}"]`)
  audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);

  if (!audio) return;

  // audio.currentTime = 0;
  // audio.play();

  key.classList.add('press')

}

function removeClass (e) {

  if (e.propertyName !== 'transform') return;

  this.classList.remove('press');

}

var keys = document.querySelectorAll(`.buttom`);

keys.forEach(function(key) {

  key.addEventListener('transitionend', removeClass)

})
