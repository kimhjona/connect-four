const countGrid = (currentCount: number, currentColumn: string[]) => {
  const checkRow = currentColumn.reduce(
    (redMinusYellow: number, currentSpot: string) => {
      if (currentSpot === "red") {
        return (redMinusYellow += 1);
      }
      if (currentSpot === "yellow") {
        return (redMinusYellow -= 1);
      }

      return redMinusYellow;
    },
    0
  );

  return checkRow + currentCount;
};

const checksIfColumnIsValid = (isItValid: boolean, currentColumn: string[]) => {
  if (!isItValid) {
    return false;
  }
  const isColumnValid = currentColumn.reduce(
    (
      checksIfThereIsAGap: {
        hasItReachedAValueYet: boolean;
        isThereAGap: boolean;
      },
      currentSpot: string
    ) => {
      if (
        (checksIfThereIsAGap.hasItReachedAValueYet &&
          checksIfThereIsAGap.isThereAGap) ||
        (checksIfThereIsAGap.hasItReachedAValueYet && currentSpot === "none")
      ) {
        return { hasItReachedAValueYet: true, isThereAGap: true };
      }

      if (currentSpot === "none") {
        return {
          hasItReachedAValueYet: false,
          isThereAGap: false,
        };
      }

      return { hasItReachedAValueYet: true, isThereAGap: false };
    },
    { hasItReachedAValueYet: false, isThereAGap: false }
  );

  return !isColumnValid.isThereAGap;
};

export const getCurrentPlayer = (gameState: string[][]) => {
  return gameState.reduce(countGrid, 0) === -1 ? "red" : "yellow";
};

export const isStateValid = (gameState: string[][]) => {
  const isCountValid =
    gameState.reduce(countGrid, 0) === 0 ||
    gameState.reduce(countGrid, 0) === -1;
  const areColumnsValid = gameState.reduce(checksIfColumnIsValid, true);

  return isCountValid && areColumnsValid;
};
