import { reference } from "./options.js";

const winningCombinations = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

export const checkWinner = (board) => {
  // if no enough moves to win return 1
  if (board.filter((el) => el !== null).length < 5) return 0;
  for (const combination of winningCombinations) {
    const IAWins = combination.every(
      (index) => board[index] === `${reference.isCircle ? "X" : "O"}`
    );
    const playersWins = combination.every(
      (index) => board[index] === `${reference.isCircle ? "O" : "X"}`
    );

    if (IAWins) return 2;
    if (playersWins) return -1;
  }

  // if every box is filled and there is no winner
  if (board.every((el) => el !== null)) return 1;

  // if move is irrelevant
  return 0;
};
