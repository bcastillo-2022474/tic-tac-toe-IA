import { reference } from "./options.js";
import { checkWinner } from "./checkWinner.js";
import { showWinPopUp, showDrawPopUp, showLostPopUp } from "./popUps.js";
import { playComputer } from "./playComputer.js";
import { renderFigure, createBoard } from "./helpers.js";

const container = document.querySelector(".container");

export const play = (e) => {
  if (!reference.playing) reference.playing = true;
  const box = e.target.closest(".box");
  if (!box) return;
  const isOccupied = box.querySelector("i") && true;
  if (isOccupied) return;
  renderFigure(box, reference.isCircle);
  reference.isCircle = !reference.isCircle;

  const winner = checkWinner(createBoard());
  if (winner === 1) {
    container.removeEventListener("click", play);
    return showDrawPopUp();
  }
  if (winner === -1) {
    container.removeEventListener("click", play);
    return showWinPopUp();
  }
  if (winner === 2) {
    container.removeEventListener("click", play);
    return showLostPopUp();
  }
  playComputer();
};
