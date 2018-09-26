export const CLEAR = "CLEAR";
export const ADD_PIECE = "ADD_PIECE";
export const SWITCH_STARTING_TURN = "SWITCH_STARTING_TURN";

type ActionTypes =
  | typeof ADD_PIECE
  | typeof CLEAR
  | typeof SWITCH_STARTING_TURN;

export interface ActionParams {
  type: ActionTypes;
  columnNumber: number;
  rowNumber: number;
}

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
