let pomodoroTimer = document.querySelector('#pomodoro-time')
let startButton = document.querySelector('#start')
let resetButton = document.querySelector('.reset')
let breakButton = document.querySelector('#break')
let pomodoroButton = document.querySelector('#pomodoro')

function format(val) {
  if (val < 10) {
    return `0${val}`
  }
  return val;
}

sec = 0
min = 25
pomodoroTimer.textContent = `${format(min)}:${format(sec)}`

let timeId = setInterval(() => {
},)

startButton.addEventListener('click', function () {
  if (startButton.textContent == 'start') {
    startButton.textContent = 'stop'
    timeId = setInterval(() => {
      if (sec == 0 && min > 0) {
        min--
        sec = 60;
      }
      sec--

      if (min == 0 && sec == 0) {
        startButton.textContent = 'start'
        clearInterval(timeId);
        if (pomodoroButton.classList.contains('active')) {
          min = 25
          sec = 0
        }
        else {
          min = 5
          sec = 0
        }
      }

      pomodoroTimer.textContent = `${format(min)}:${format(sec)}`
    }, 15)
  }

  else {
    startButton.textContent = 'start'
    clearInterval(timeId)
  }
}
)

breakButton.addEventListener('click', function () {
  sec = 0
  min = 5
  startButton.textContent = 'start'
  clearInterval(timeId)

  pomodoroTimer.textContent = `${format(min)}:${format(sec)}`

  breakButton.classList.add('active')
  pomodoroButton.classList.remove('active')
})

pomodoroButton.addEventListener('click', function () {
  sec = 0
  min = 25
  startButton.textContent = 'start'
  clearInterval(timeId)

  pomodoroTimer.textContent = `${format(min)}:${format(sec)}`
  breakButton.classList.remove('active')
  pomodoroButton.classList.add('active')
})


resetButton.addEventListener('click', function () {
  if (pomodoroButton.classList.contains('active')) {
    sec = 0
    min = 25
  }
  else {
    sec = 0
    min = 5
  }

  startButton.textContent = 'start'
  pomodoroTimer.textContent = `${format(min)}:${format(sec)}`
  clearInterval(timeId)
})

