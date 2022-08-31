window.onload = function () {
  var miliseconds = 00
  var seconds = 00
  var minutes = 00
  const stopwatchWrapper = document.getElementById('stopwatch')
  const timer = document.getElementById('timer')
  const buttonStart = document.getElementById('start-button')
  const buttonStop = document.getElementById('stop-button')
  const buttonReset = document.getElementById('reset-button')

  var Interval

  buttonStart.onclick = function () {
    clearInterval(Interval)
    Interval = setInterval(startTimer, 1)
  }

  buttonStop.onclick = function () {
    clearInterval(Interval)
  }

  buttonReset.onclick = function () {
    clearInterval(Interval)
    seconds = '00'
    minutes = '00'
    miliseconds = '00'
    timer.innerHTML = `${minutes}:${seconds}:${miliseconds}`
  }

  function startTimer() {
    if (miliseconds < 99) {
      miliseconds++
      timer.innerHTML = `0${minutes}:0${seconds}:${miliseconds}`
    }

    if (miliseconds >= 99) {
      miliseconds = '00'
      seconds += 1
      timer.innerHTML = `0${minutes}:0${seconds}:${miliseconds}`
    }
    if (seconds > 9) {
      timer.innerHTML = `0${minutes}:${seconds}:${miliseconds}`
    }

    if (seconds > 59) {
      seconds = 00
      miliseconds == 00
      minutes += 1
      timer.innerHTML = `0${minutes}:0${seconds}:${miliseconds}`
    }
    if (minutes > 9) {
      timer.innerHTML = `${minutes}:0${seconds}:${miliseconds}`
    }
  }
}
