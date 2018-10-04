const getArrayOfColumns = (entireGameState: string[][], columnNumber: number) =>
  entireGameState.map(row => row[columnNumber]);

const getBottomLeftToTopRightDiagonal = (
  entireGameState: string[][],
  rowNumber: number,
  columnNumber: number
) => {
  const rowsMaxIndex = entireGameState.length - 1;
  const columnsMaxIndex = entireGameState[0].length - 1;

  const diagonal: string[] = [];
  let startingColumnNumber =
    columnNumber > rowsMaxIndex - rowNumber
      ? columnNumber - (rowsMaxIndex - rowNumber)
      : 0;

  let startingRowNumber =
    rowsMaxIndex - rowNumber > columnNumber
      ? rowsMaxIndex + columnNumber - (rowsMaxIndex - rowNumber)
      : rowsMaxIndex;

  while (startingColumnNumber <= columnsMaxIndex && startingRowNumber >= 0) {
    diagonal.push(entireGameState[startingRowNumber][startingColumnNumber]);
    startingColumnNumber += 1;
    startingRowNumber -= 1;
  }

  return diagonal;
};

const getTopLeftToBottomRightDiagonal = (
  entireGameState: string[][],
  rowNumber: number,
  columnNumber: number
) => {
  const rowsMaxIndex = entireGameState.length - 1;
  const columnsMaxIndex = entireGameState[0].length - 1;
  const diagonal: string[] = [];
  let startingColumnNumber =
    columnNumber - rowNumber > 0 ? columnNumber - rowNumber : 0;
  let startingRowNumber =
    rowNumber - columnNumber > 0 ? rowNumber - columnNumber : 0;

  while (
    startingRowNumber <= rowsMaxIndex &&
    startingColumnNumber <= columnsMaxIndex
  ) {
    diagonal.push(entireGameState[startingRowNumber][startingColumnNumber]);
    startingColumnNumber += 1;
    startingRowNumber += 1;
  }

  return diagonal;
};

const checksForConsecutivePieces = (
  arrayToCheck: string[],
  winningValue: string,
  winningNumber: number
) => {
  const checksForWin = arrayToCheck.reduce(
    (
      isThereAMatchYet: { currentCount: number; isThereAWinYet: boolean },
      currentPiece: string
    ) => {
      if (
        isThereAMatchYet.currentCount === winningNumber ||
        isThereAMatchYet.isThereAWinYet === true ||
        (currentPiece === winningValue &&
          isThereAMatchYet.currentCount + 1 === winningNumber)
      ) {
        return {
          currentCount: isThereAMatchYet.currentCount + 1,
          isThereAWinYet: true,
        };
      }
      if (currentPiece === winningValue) {
        return {
          currentCount: isThereAMatchYet.currentCount + 1,
          isThereAWinYet: false,
        };
      }

      return { currentCount: 0, isThereAWinYet: false };
    },
    { currentCount: 0, isThereAWinYet: false }
  );

  return checksForWin.isThereAWinYet;
};

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
) => [...rowArray.slice(0, column), turn, ...rowArray.slice(column + 1)];

export const toggleTurn = (previousTurn: string) =>
  previousTurn === "red" ? "yellow" : "red";

export const checkWins = (
  entireGameState: string[][],
  rowNumber: number,
  columnNumber: number
) => {
  const columnArray = getArrayOfColumns(entireGameState, columnNumber);
  const bottomLeftToTopRightDiagonal = getBottomLeftToTopRightDiagonal(
    entireGameState,
    rowNumber,
    columnNumber
  );
  const topLeftToBottomRightDiagonal = getTopLeftToBottomRightDiagonal(
    entireGameState,
    rowNumber,
    columnNumber
  );

  const rowWinRed = checksForConsecutivePieces(
    entireGameState[rowNumber],
    "red",
    4
  );
  const columnWinRed = checksForConsecutivePieces(columnArray, "red", 4);
  const bottomLeftToTopRightDiagonalWinRed = checksForConsecutivePieces(
    bottomLeftToTopRightDiagonal,
    "red",
    4
  );
  const topLeftToBottomRightDiagonalRwinRed = checksForConsecutivePieces(
    topLeftToBottomRightDiagonal,
    "red",
    4
  );

  if (
    rowWinRed ||
    columnWinRed ||
    bottomLeftToTopRightDiagonalWinRed ||
    topLeftToBottomRightDiagonalRwinRed
  ) {
    return { isThereAWinner: true, winner: "red" };
  }

  const rowWinYellow = checksForConsecutivePieces(
    entireGameState[rowNumber],
    "yellow",
    4
  );
  const columnWinYellow = checksForConsecutivePieces(columnArray, "yellow", 4);
  const bottomLeftToTopRightDiagonalWinYellow = checksForConsecutivePieces(
    bottomLeftToTopRightDiagonal,
    "yellow",
    4
  );
  const topLeftToBottomRightDiagonalRwinYellow = checksForConsecutivePieces(
    topLeftToBottomRightDiagonal,
    "yellow",
    4
  );

  if (
    rowWinYellow ||
    columnWinYellow ||
    bottomLeftToTopRightDiagonalWinYellow ||
    topLeftToBottomRightDiagonalRwinYellow
  ) {
    return { isThereAWinner: true, winner: "yellow" };
  }

  return { isThereAWinner: false, winner: "" };
};
