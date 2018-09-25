import * as React from "react";
import { Disc } from "./Disc";

interface RowProps {
  gameRow: string[];
}

export class Row extends React.Component<RowProps> {
  public render() {
    const { gameRow } = this.props;

    return (
      <div className="row">
        <Disc gameDisk={gameRow[0]} />
        <Disc gameDisk={gameRow[1]} />
        <Disc gameDisk={gameRow[2]} />
        <Disc gameDisk={gameRow[3]} />
        <Disc gameDisk={gameRow[4]} />
        <Disc gameDisk={gameRow[5]} />
        <Disc gameDisk={gameRow[6]} />
      </div>
    );
  }
}
