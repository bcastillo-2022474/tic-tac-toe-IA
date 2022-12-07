import { reference } from "./options.js";
import { changePlayer } from "./changePlayer.js";
import { play } from "./play.js";

const container = document.querySelector(".container");
const choiceContainer = document.querySelector(".choice");

export const reset = () => {
  reference.isCircle = true;
  reference.playing = false;
  container.querySelectorAll(".box").forEach((box) => {
    box.dataset.value = "";
    box.innerHTML = "";
  });
  const cross = document.querySelector(".choice__cross");
  const circle = document.querySelector(".choice__circle");
  circle.classList.remove("focus");
  cross.classList.add("focus");

  choiceContainer.removeEventListener("click", changePlayer);
  container.removeEventListener("click", play);
  choiceContainer.addEventListener("click", changePlayer);
  container.addEventListener("click", play);
};
