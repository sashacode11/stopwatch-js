const hours = document.getElementById('hour');
const minutes = document.getElementById('min');
const seconds = document.getElementById('sec');

const startBtn = document.getElementById('startBtn');
const resetBtn = document.getElementById('resetBtn');

var interval = null;


function countdown() {
  var displaySeconds = seconds.value;
  var displayMinutes = minutes.value;
  var displayHours = hours.value;

  displaySeconds--;

  if (displaySeconds <= 0) {
    if (displayHours > 0) {
      displayMinutes = 60;
      displayHours--;
    }
    if (displayMinutes > 0) {
      displaySeconds = 60;
      displayMinutes--;
    } else {
      displayMinutes = '';
      displaySeconds = '';
    }
  }

  seconds.value = displaySeconds;
  minutes.value = displayMinutes;
  hours.value = displayHours;
}

startBtn.addEventListener('click', () => {
  interval = setInterval(countdown, 1000);
})

resetBtn.addEventListener('click', () => {
  clearInterval(interval);
  hours.value = '';
  minutes.value = '';
  seconds.value = '';
})