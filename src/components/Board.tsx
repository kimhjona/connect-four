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
        <Row gameRow={gameState[0]} />
        <Row gameRow={gameState[1]} />
        <Row gameRow={gameState[2]} />
        <Row gameRow={gameState[3]} />
        <Row gameRow={gameState[4]} />
        <Row gameRow={gameState[5]} />
      </div>
    );
  }
}
