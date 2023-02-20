const timeDisplay = document.getElementById('time-display');
const start = document.getElementById('start');
const stop = document.getElementById('stop');
const reset = document.getElementById('reset');

var milliseconds = 0, seconds = 0, minutes = 0, hours = 0;
var timer;
var paused = true;

start.addEventListener('click', () =>{
  if(paused) {
    paused = false;
    timer = setInterval(runTime);
  }
})

stop.addEventListener('click', () =>{
  if(!paused) {
    paused = true;
    clearInterval(timer);
  }
})

reset.addEventListener('click',() =>{
  paused = true
  milliseconds = 0;
  seconds = 0;
  minutes = 0;
  hours = 0;
  clearInterval(timer);
  timeDisplay.textContent = getTimer();
})

function runTime() {
  milliseconds++;
  if(milliseconds == 100) {
    milliseconds = 0;
    seconds++;
  }
  if(seconds == 60) {
    seconds = 0;
    minutes++;
  }
  if(minutes == 60) {
      minutes = 0;
      hours++;
  }
  timeDisplay.textContent = getTimer()
}

function getTimer() {
  return (hours < 10 ? '0' + hours : hours) + ":" + (minutes < 10 ? '0' + minutes : minutes) + ':' + (seconds < 10 ? '0' + seconds : seconds) + '.' + (milliseconds < 10 ? '0' + milliseconds : milliseconds)
}