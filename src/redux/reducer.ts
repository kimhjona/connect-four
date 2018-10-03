import {
  ActionParams,
  ADD_PIECE,
  CLEAR,
  StoreState,
  SWITCH_STARTING_TURN,
} from "./types";
import {
  checkWins,
  findMostBottomRowIndex,
  newInstanceOfArrayWithPieceAdded,
  toggleTurn,
} from "functions";

const initialState: StoreState = {
  gameState: [
    ["none", "none", "none", "none", "none", "none", "none"],
    ["none", "none", "none", "none", "none", "none", "none"],
    ["none", "none", "none", "none", "none", "none", "none"],
    ["none", "none", "none", "none", "none", "none", "none"],
    ["none", "none", "none", "none", "none", "none", "none"],
    ["none", "none", "none", "none", "none", "none", "none"],
  ],
  message: "",
  preventFurtherGamePlay: false,
  turn: "yellow",
};

export const reducer = (state = initialState, action: ActionParams) => {
  switch (action.type) {
    case CLEAR: {
      return {
        ...initialState,
        message: "Cleared!",
      };
    }
    case ADD_PIECE: {
      const { columnNumber } = action;
      const rowNumbertoAddPieceTo = findMostBottomRowIndex(
        state.gameState,
        columnNumber
      );

      if (rowNumbertoAddPieceTo === -1) {
        return { ...state, message: "That won't work!" };
      }

      const newRow = newInstanceOfArrayWithPieceAdded(
        state.gameState[rowNumbertoAddPieceTo],
        columnNumber,
        state.turn
      );

      const newArray = state.gameState.map((row: string[]) => row.slice());
      newArray[rowNumbertoAddPieceTo] = newRow;

      const isThereAWinner = checkWins(
        newArray,
        rowNumbertoAddPieceTo,
        columnNumber
      );

      if (isThereAWinner.isThereAWinner) {
        return {
          ...state,
          gameState: newArray,
          message: `Congrats to ${isThereAWinner.winner}!`,
          preventFurtherGamePlay: true,
        };
      }

      return {
        ...state,
        gameState: newArray,
        message: "",
        turn: toggleTurn(state.turn),
      };
    }
    case SWITCH_STARTING_TURN: {
      return { ...state, turn: toggleTurn(state.turn) };
    }
    default:
      return state;
  }
};
