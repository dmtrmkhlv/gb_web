import { printError, printREsult } from "./printResult.js";
import getDateDiff from "./getDateDiff.js";
import setSection from "./setSection.js";
import { startTimer, stopTimer } from "./calcHandler.js";

const form = document.getElementById("datecalc");

form.onsubmit = (event) => {
  event.preventDefault();

  const formData = new FormData(event.target);

  const firsDate = formData.get("firstDate");
  const secondDate = formData.get("secondDate");

  if (!firsDate || !secondDate) {
    printError("Oooooopppsss - введите текст!!!!");
  } else {
    const dateDiff = getDateDiff(firsDate, secondDate);
    printREsult(dateDiff);
  }
};

const buttons = document.querySelectorAll(".button");
[...buttons].forEach((button) => {
  button.addEventListener("click", () => {
    setSection(button.dataset.section, "section");
  });
});

const startBtn = document.getElementById("start-btn");
const stopBtn = document.getElementById("stop-btn");
startBtn.addEventListener("click", startTimer);
stopBtn.addEventListener("click", stopTimer);
