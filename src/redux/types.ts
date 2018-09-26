export const CLEAR = "CLEAR";
export const ADD_PIECE = "ADD_PIECE";

type ActionTypes = typeof ADD_PIECE | typeof CLEAR;

export interface ActionParams {
  type: ActionTypes;
  columnNumber: number;
  rowNumber: number;
}
