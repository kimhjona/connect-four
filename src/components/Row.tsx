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
        {gameRow.map((piece: string, columnNumber: number = 0) => (
          <Piece
            gamePiece={piece}
            columnNumber={columnNumber}
            key={columnNumber++}
          />
        ))}
      </div>
    );
  }
}
