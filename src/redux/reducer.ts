import { ActionParams, ADD_PIECE, CLEAR } from "./types";
import {
  findMostBottomRowIndex,
  newInstanceOfArrayWithPieceAdded,
} from "functions";

const initialState: StoreState = {
  message: "",
  row0: ["none", "none", "none", "none", "none", "none", "none"],
  row1: ["none", "none", "none", "none", "none", "none", "none"],
  row2: ["none", "none", "yellow", "red", "none", "none", "none"],
  row3: ["none", "none", "red", "yellow", "none", "none", "none"],
  row4: ["red", "yellow", "yellow", "yellow", "red", "red", "yellow"],
  row5: ["red", "red", "yellow", "yellow", "red", "yellow", "red"],
  turn: "red",
};

export interface StoreState {
  message: string;
  row0: string[];
  row1: string[];
  row2: string[];
  row3: string[];
  row4: string[];
  row5: string[];
  turn: string;
}

export const reducer = (state = initialState, action: ActionParams) => {
  switch (action.type) {
    case CLEAR: {
      return {
        initialState,
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

      console.log(
        newInstanceOfArrayWithPieceAdded(
          state[`row${rowNumbertoAddPieceTo}`],
          columnNumber,
          state.turn
        )
      );

      return state;
    }
    default:
      return state;
  }
};
