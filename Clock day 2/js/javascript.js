
function date() {

  const secondsDOM = document.querySelector('.seconds')
  const minsDOM = document.querySelector('.mins')
  const hoursDOM = document.querySelector('.hours')
  const date = new Date();

  let seconds = date.getSeconds();
  let secondsDegrees = Math.floor((seconds / 60) * 360) + 90

  let mins = date.getMinutes();
  let minsDegrees = Math.floor((mins / 60) * 360) + 90

  let hours = date.getHours()
  let hoursDegrees = Math.floor((hours / 12) * 360) + 90

  secondsDOM.style.transform= `rotate(${secondsDegrees}deg)`

  minsDOM.style.transform= `rotate(${minsDegrees}deg)`

  hoursDOM.style.transform= `rotate(${hoursDegrees}deg)`


}

setInterval(date, 1000)
