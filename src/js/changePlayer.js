import { reference } from "./options.js";
import { playComputer } from "./playComputer.js";

const choiceContainer = document.querySelector(".choice");

const focusPlayer = () => {
  if (reference.playing) return;
  const cross = document.querySelector(".choice__cross");
  const circle = document.querySelector(".choice__circle");
  cross.classList.toggle("focus");
  circle.classList.toggle("focus");
};

export const changePlayer = (e) => {
  if (reference.playing) return;
  if (!e.target.closest(".choice__circle")) return;
  focusPlayer();
  reference.playing = true;
  // may change
  // reference.isCircle = !reference.isCircle;
  playComputer();
  choiceContainer.removeEventListener("click", changePlayer);
};
