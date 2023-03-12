import { printError, printREsult } from "./printResult.js";
import getDateDiff from "./getDateDiff.js";
import setSection from "./setSection.js";

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

console.log(document.querySelectorAll(".button"));
const buttons = document.querySelectorAll(".button");
[...buttons].forEach((button) => {
  button.addEventListener("click", () => {
    setSection(button.dataset.section, "section");
  });
});
