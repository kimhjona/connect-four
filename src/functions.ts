export const findMostBottomRowIndex = (
  gameState: string[][],
  columnNumber: number
) => {
  const arrayOfColumnValues = getArrayOfColumns(gameState, columnNumber);

  return arrayOfColumnValues.lastIndexOf("none");
};

export const newInstanceOfArrayWithPieceAdded = (
  rowArray: string[],
  column: number,
  turn: string
) => {
  return [...rowArray.slice(0, column), turn, ...rowArray.slice(column + 1)];
};

export const toggleTurn = (previousTurn: string) => {
  return previousTurn === "red" ? "yellow" : "red";
};

// export const checkWins = (entireGameState: string[][]) => {
//   checkRows(entireGameState);
// };

const getArrayOfColumns = (
  entireGameState: string[][],
  columnNumber: number
) => {
  return entireGameState.map(row => row[columnNumber]);
};

// const checkRows = (entireGameState: string[][]) => {

// };
