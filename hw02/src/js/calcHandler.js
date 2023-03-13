const timeInput = document.getElementById("time-input");
const timer = document.getElementById("timerCount");
const startBtn = document.getElementById("start-btn");
const stopBtn = document.getElementById("stop-btn");

let intervalId;
let remainingTime;

function formatTime(time) {
  const minutes = Math.floor(time / 60);
  const seconds = time % 60;
  return `${minutes < 10 ? "0" : ""}${minutes}:${
    seconds < 10 ? "0" : ""
  }${seconds}`;
}

function updateTimer() {
  timer.textContent = formatTime(remainingTime);
}

export const startTimer = () => {
  const time = parseInt(timeInput.value);
  if (isNaN(time) || time <= 0) {
    alert("Введите корректное время!");
    return;
  }

  remainingTime = time;
  updateTimer();
  intervalId = setInterval(() => {
    remainingTime--;
    updateTimer();

    if (remainingTime === 0) {
      clearInterval(intervalId);
      const sound = new Howl({
        src: ["./sound/beep-01a.mp3"],
      });
      sound.play();
      stopTimer();
    }
  }, 1000);

  startBtn.disabled = true;
  stopBtn.disabled = false;
};

export const stopTimer = () => {
  clearInterval(intervalId);
  startBtn.disabled = false;
  stopBtn.disabled = true;
};
