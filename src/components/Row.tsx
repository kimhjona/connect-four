import * as React from "react";
import { PieceWrapped as Piece } from "./Piece";

interface RowProps {
  gameRow: string[];
}

export class Row extends React.Component<RowProps> {
  public render() {
    const { gameRow } = this.props;

    return (
      <div className="row">
        <Piece gamePiece={gameRow[0]} columnNumber={0} />
        <Piece gamePiece={gameRow[1]} columnNumber={1} />
        <Piece gamePiece={gameRow[2]} columnNumber={2} />
        <Piece gamePiece={gameRow[3]} columnNumber={3} />
        <Piece gamePiece={gameRow[4]} columnNumber={4} />
        <Piece gamePiece={gameRow[5]} columnNumber={5} />
        <Piece gamePiece={gameRow[6]} columnNumber={6} />
      </div>
    );
  }
}
