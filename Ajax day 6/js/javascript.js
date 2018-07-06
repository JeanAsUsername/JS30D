
document.addEventListener('DOMContentLoaded', function() {

  const api = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json'
  const Arrcities = [];

  fetch(api)
    .then(cont => cont.json())
    .then(data => Arrcities.push(...data))

    console.log(Arrcities)

  function searchCity(word, cities) {

    return cities.filter(place => {

      const re = new RegExp(word, 'gi')
      return place.city.match(re) || place.state.match(re)

    })

  }

  function cityControl() {

    const result = searchCity(this.value, Arrcities);
    const resultReg = new RegExp(this.value, 'gi')

    const html = result.map(place => {

      let city = place.city.replace(resultReg, `<span class='hl'>${this.value}</span>`)
      let state = place.state.replace(resultReg, `<span class='hl'>${this.value}</span>`)

      return `<li>
      <span class="name">${city}, ${state}</span>
      <span class="population">${place.population}</span>
      </li>`

    }).join('')

    suggestions.innerHTML = html

  }

  const input = document.querySelector('.search')
  const suggestions =  document.querySelector('.suggestions')

  input.addEventListener('keyup', cityControl)


})
