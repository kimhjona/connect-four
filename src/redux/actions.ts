// tslint:disable:object-literal-sort-keys

import {
  ADD_PIECE,
  CLEAR,
  PREVENT_FURTHER_GAMEPLAY,
  SWITCH_STARTING_TURN,
} from "./types";

export const clear = () => ({ type: CLEAR });

export const addPiece = (columnNumber: number) => ({
  type: ADD_PIECE,
  columnNumber,
});

export const switchStartingTurn = () => ({ type: SWITCH_STARTING_TURN });

export const preventFurtherGamePlay = () => ({
  type: PREVENT_FURTHER_GAMEPLAY,
});
