export const generatePossibleMoves = (board, fig) => {
  const possibleBoards = [];
  for (const [index, el] of [...board.entries()]) {
    if (el !== null) continue;
    const newBoard = [...board];
    newBoard[index] = fig;
    possibleBoards.push([newBoard, index]);
  }
  return possibleBoards;
};
