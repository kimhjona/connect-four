import * as React from "react";
import { Row } from "./Row";

interface BoardProps {
  gameState: string[][];
}

export class Board extends React.Component<BoardProps> {
  public render() {
    const { gameState } = this.props;

    return (
      <div className="board">
        {gameState.map((row: string[], i: number = 0) => (
          <Row gameRow={row} key={i++} />
        ))}
      </div>
    );
  }
}
