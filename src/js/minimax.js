import { checkWinner } from "./checkWinner.js";
import { generatePossibleMoves } from "./generatePosssibleMoves.js";
import { reference } from "./options.js";

let timesCalled = 0;
export const minimax = (board, depth, alpha, beta, isMaximizing) => {
  timesCalled++;
  const winner = checkWinner(board);
  if (!depth || winner !== 0) return { score: winner };

  // IA tries to maximize score
  if (isMaximizing) {
    let bestScore = { score: -Infinity };
    const possibleBoards = generatePossibleMoves(
      board,
      reference.isCircle ? "X" : "O"
    );
    for (const [possibleBoard, index] of possibleBoards) {
      const { score } = minimax(possibleBoard, depth - 1, alpha, beta, false);
      bestScore =
        Math.max(bestScore.score, score) !== score
          ? bestScore
          : { score, index };

      alpha = Math.max(alpha, bestScore.score);
      if (alpha === 2) break;
    }
    return bestScore;
  }
  // Player tries to minimize score
  let bestScore = { score: Infinity };
  const possibleBoards = generatePossibleMoves(
    board,
    reference.isCircle ? "O" : "X"
  );
  for (const [possibleBoard, index] of possibleBoards) {
    const { score } = minimax(possibleBoard, depth - 1, alpha, beta, true);
    bestScore =
      Math.min(bestScore.score, score) !== score ? bestScore : { score, index };

    beta = Math.min(beta, bestScore.score);
    if (beta === -1) break;
  }
  return bestScore;
};
