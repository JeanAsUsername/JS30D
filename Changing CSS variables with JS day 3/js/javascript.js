
var input = document.querySelectorAll('input')

function controller() {

  const unidad = this.dataset.sizing || '';

  document.documentElement.style.setProperty('--' + this.name, this.value + unidad);

}

input.forEach(function(val) {

  val.addEventListener('change', controller)
  val.addEventListener('mousemove', controller)

})
