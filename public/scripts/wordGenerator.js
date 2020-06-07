const words = ["amor", "falso", "mito", "puta", "esmo", "brio", "vide", "caos"];

const wordsPerMinute = document.querySelector("#wordsPerMinute").value;
const maxTime = document.querySelector("#maxTime").value;

const timer =  document.querySelector("#time");
const wordDisplay = document.querySelector("#word");
const wordCounter = document.querySelector("#wordCount");

var wordCount = 0;

var seconds = 0;
var minutes = 0;
var secondsString = "00";
var minutesString = "00";

function startTimer() {
  function updateTimer() {
    seconds += 1;
    
    if (seconds == 60) {
      minutes += 1;
      seconds = 0;

      if (minutes < 10) {
        minutesString = "0" + minutes;
      } else {
        minutesString = minutes;
      }
    }
    
    if (seconds < 10) {
      secondsString = "0" + seconds;
    } else {
      secondsString = seconds;
    }

    timer.innerHTML = `${minutesString}:${secondsString}`;
  }

  setInterval(updateTimer, 1000);
}

function start() {
  startTimer();
  
  function updateWord() {
    const index = Math.floor(Math.random() * words.length);

    wordCount++;

    wordDisplay.innerHTML = words[index];
    wordCounter.innerHTML = wordCount;
  }
  
  updateWord();

  const ms = Math.floor(1000 * ( 60 / wordsPerMinute));

  setInterval(updateWord, ms);
}

function exit() {
  alert(`
    Você rimou com ${wordCount}, em ${minutesString} minutos e ${secondsString} segundos.
  `);

  return window.location = "/";
}

document
  .querySelector("#stopButton")
  .addEventListener("click", exit);

start();