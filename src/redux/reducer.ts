import {
  ActionParams,
  ADD_PIECE,
  CLEAR,
  StoreState,
  SWITCH_STARTING_TURN,
} from "./types";
import {
  // checkWins,
  findMostBottomRowIndex,
  newInstanceOfArrayWithPieceAdded,
  toggleTurn,
} from "functions";

const initialState: StoreState = {
  message: "",
  row0: ["none", "none", "none", "none", "none", "none", "none"],
  row1: ["none", "none", "none", "none", "none", "none", "none"],
  row2: ["none", "none", "none", "none", "none", "none", "none"],
  row3: ["none", "none", "none", "none", "none", "none", "none"],
  row4: ["none", "none", "none", "none", "none", "none", "none"],
  row5: ["none", "none", "none", "none", "none", "none", "none"],
  turn: "red",
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
      const entireGameState = [
        state.row0,
        state.row1,
        state.row2,
        state.row3,
        state.row4,
        state.row5,
      ];
      const rowNumbertoAddPieceTo = findMostBottomRowIndex(
        entireGameState,
        columnNumber
      );

      if (rowNumbertoAddPieceTo === -1) {
        return { ...state, message: "That won't work!" };
      }

      const newRow = newInstanceOfArrayWithPieceAdded(
        state[`row${rowNumbertoAddPieceTo}`],
        columnNumber,
        state.turn
      );
      const turn = toggleTurn(state.turn);
      // const isThereAWinner = checkWins(entireGameState);

      // console.log(isThereAWinner);

      return {
        ...state,
        [`row${rowNumbertoAddPieceTo}`]: newRow,
        message: "",
        turn,
      };
    }
    case SWITCH_STARTING_TURN: {
      return { ...state, turn: toggleTurn(state.turn) };
    }
    default:
      return state;
  }
};
