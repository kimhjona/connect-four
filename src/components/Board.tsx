import * as React from "react";
import { Row } from "./Row";

interface BoardProps {
  row0: string[];
  row1: string[];
  row2: string[];
  row3: string[];
  row4: string[];
  row5: string[];
}

export class Board extends React.Component<BoardProps> {
  public render() {
    const { row0, row1, row2, row3, row4, row5 } = this.props;

    return (
      <div className="board">
        <Row gameRow={row0} />
        <Row gameRow={row1} />
        <Row gameRow={row2} />
        <Row gameRow={row3} />
        <Row gameRow={row4} />
        <Row gameRow={row5} />
      </div>
    );
  }
}
