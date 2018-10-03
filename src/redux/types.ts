export const CLEAR = "CLEAR";
export const ADD_PIECE = "ADD_PIECE";
export const SWITCH_STARTING_TURN = "SWITCH_STARTING_TURN";
export const PREVENT_FURTHER_GAMEPLAY = "PREVENT_FURTHER_GAMEPLAY";

type ActionTypes =
  | typeof ADD_PIECE
  | typeof CLEAR
  | typeof PREVENT_FURTHER_GAMEPLAY
  | typeof SWITCH_STARTING_TURN;

export interface ActionParams {
  type: ActionTypes;
  columnNumber: number;
  rowNumber: number;
}

export interface StoreState {
  message: string;
  gameState: string[][];
  preventFurtherGamePlay: boolean;
  turn: string;
}
