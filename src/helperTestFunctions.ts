const countGrid = (gameState: string[][]) =>
  gameState.reduce((currentCount: number, currentColumn: string[]) => {
    const checkRow = currentColumn.reduce(
      (redMinusYellow: number, currentSpot: string) => {
        if (currentSpot === "red") return (redMinusYellow += 1);
        if (currentSpot === "yellow") return (redMinusYellow -= 1);
        return redMinusYellow;
      },
      0
    );
    return checkRow + currentCount;
  }, 0);

export const get_current_player = (gameState: string[][]) => {
  return countGrid(gameState) === -1 ? "red" : "yellow";
};

export const is_state_valid = (gameState: string[][]) => {
  const isCountValid =
    countGrid(gameState) === 0 || countGrid(gameState) === -1;
  const areColumnsValid = gameState.reduce(
    (isItValid: boolean, currentColumn: string[]) => {
      if (!isItValid) return false;
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
            (checksIfThereIsAGap.hasItReachedAValueYet &&
              currentSpot === "none")
          )
            return { hasItReachedAValueYet: true, isThereAGap: true };

          if (currentSpot === "none")
            return {
              hasItReachedAValueYet: false,
              isThereAGap: false,
            };
          return { hasItReachedAValueYet: true, isThereAGap: false };
        },
        { hasItReachedAValueYet: false, isThereAGap: false }
      );
      return !isColumnValid.isThereAGap;
    },
    true
  );
  return isCountValid && areColumnsValid;
};
