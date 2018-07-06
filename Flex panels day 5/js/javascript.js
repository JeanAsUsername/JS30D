
document.addEventListener('DOMContentLoaded', function() {

  const panels = document.querySelectorAll('.panel')

  function toggle() {

    this.classList.toggle('open')
  }

  function toggleText(e) {

    if (e.propertyName.includes('flex')) {

      this.classList.toggle('open-active')
    }

  }

  panels.forEach(val => val.addEventListener('click', toggle))
  panels.forEach(val => val.addEventListener('transitionend', toggleText))

})
