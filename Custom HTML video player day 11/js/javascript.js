
document.addEventListener('DOMContentLoaded', function() {

  const player = document.querySelector('.player')
  const video = document.querySelector('.viewer')
  const progress = document.querySelector('.progress')
  const progressBar = document.querySelector('.progress__filled')
  const toggle = document.querySelector('.toggle')
  const skipButtons = document.querySelectorAll('[data-skip]')
  const ranges = document.querySelectorAll('.player__slider')

  function togglePlay() {
    let method = video.paused ? 'play' : 'pause'
    video[method]()
  }

  function toggleIcon() {
    let icon = this.paused ? '►' : '❚ ❚'
    toggle.textContent = icon
  }

  function skip() {
    video.currentTime += parseFloat( this.dataset.skip )
  }

  function handleRangeUpdate() {
    video[this.name] = this.value
  }

  function handleProgress() {
    let percent = (video.currentTime / video.duration) * 100
    progressBar.style.flexBasis = `${percent}%`
  }

  function scrub(e) {
    let position = (e.offsetX / progress.offsetWidth) * video.duration
    video.currentTime = position
  }
  // Listeners

  video.addEventListener('click', togglePlay)
  video.addEventListener('play', toggleIcon)
  video.addEventListener('pause', toggleIcon)
  video.addEventListener('timeupdate', handleProgress)

  toggle.addEventListener('click', togglePlay)

  skipButtons.forEach(button => {
    button.addEventListener('click', skip)
  })

  ranges.forEach(range => {
    range.addEventListener('change', handleRangeUpdate)
  })

  mouseDown = false
  progress.addEventListener('click', scrub)
  progress.addEventListener('mousemove', function(e) { mouseDown && scrub(e )})

  progress.addEventListener('mousedown', function() { mouseDown = true; video.pause() })
  progress.addEventListener('mouseup', function() { mouseDown = false; video.play() })




})
