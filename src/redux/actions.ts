// tslint:disable:object-literal-sort-keys

import { ADD_PIECE, CLEAR } from "./types";

export const clearBoard = () => ({ type: CLEAR });

export const addPiece = (columnNumber: number) => ({
  type: ADD_PIECE,
  columnNumber,
});
