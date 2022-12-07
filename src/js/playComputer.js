import { reference } from "./options.js";
import { checkWinner } from "./checkWinner.js";
import { showWinPopUp, showLostPopUp, showDrawPopUp } from "./popUps.js";
import { minimax } from "./minimax.js";
import { play } from "./play.js";
import { renderFigure, createBoard } from "./helpers.js";

const container = document.querySelector(".container");

export const playComputer = () => {
  const board = createBoard();
  const { index } = minimax(board, 8, -Infinity, Infinity, true);
  const box = container.querySelectorAll(".box")[index];
  const isOccupied =
    box.querySelector(".circle") || box.querySelector(".cross-stripe");

  if (isOccupied) return;
  renderFigure(box, reference.isCircle);
  const winner = checkWinner(createBoard());
  reference.isCircle = !reference.isCircle;

  if (winner === 0) return;
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
};
