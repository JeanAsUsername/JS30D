
document.addEventListener('DOMContentLoaded', () => {

  let timerDown
  const timerDisplay = document.querySelector('.display__time-left'),
        EndTime = document.querySelector('.display__end-time'),
        buttons = document.querySelectorAll('[data-time]'),
        enterMinutes = document.customForm


  function timer(seconds) {

    clearInterval(timerDown)

    const then = Date.now() + seconds * 1000

    displayTimer(seconds)
    displayEndTime(then)

    timerDown = setInterval(function() {

      const timeLeft = parseInt(Math.round( ( then - Date.now() ) / 1000))
      if (timeLeft < 0) {
        clearInterval(timerDown)
        return
      }
      displayTimer(timeLeft)
    }, 1000)

  }

  function displayTimer(seconds) {

    const minutes = Math.floor(seconds / 60),
          secondsLeft = seconds % 60

    timerDisplay.textContent = `${minutes}:${secondsLeft < 10 ? '0' : ''}${secondsLeft}`
  }

  function displayEndTime(time) {

    const end = new Date(time),
          hour = end.getHours(),
          minute = end.getMinutes(),
          pm = hour > 12 ? true : false

    EndTime.textContent = `Come back at ${pm ? hour - 12 : hour}:${minute < 10 ? '0' : ''}${minute} ${pm ? 'p.m' : 'a.m'} !`

  }

  function startTime() {

    const seconds = this.dataset.time
    timer(seconds)

  }

  buttons.forEach((button) => {
    button.addEventListener('click', startTime)
  })

  enterMinutes.addEventListener('submit', function(e) {
    e.preventDefault()
    const mins = this.minutes.value,
          seconds = mins * 60
    timer(seconds)
    this.reset()
  })

})
