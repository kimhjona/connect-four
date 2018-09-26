export const findMostBottomRowIndex = (
  gameState: string[][],
  columnNumber: number
) => {
  const arrayOfColumnValues = gameState.map(row => row[columnNumber]);

  return arrayOfColumnValues.lastIndexOf("none");
};

export const newInstanceOfArrayWithPieceAdded = (
  rowArray: string[],
  column: number,
  turn: string
) => {
  console.log("rowArray", rowArray);
  console.log("column", column);
  console.log("turn", turn);

  return [...rowArray.slice(0, column), turn, ...rowArray.slice(column + 1)];
};
