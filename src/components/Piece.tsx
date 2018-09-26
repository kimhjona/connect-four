import * as React from "react";
import { connect } from "react-redux";
import { StoreState } from "redux/reducer";
import { addPiece } from "redux/actions";

interface PieceProps {
  addPiece: typeof addPiece;
  gamePiece: string;
  columnNumber: number;
}

class Piece extends React.Component<PieceProps> {
  onClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const { addPiece, columnNumber } = this.props;
    addPiece(columnNumber);
  };

  render() {
    const { gamePiece } = this.props;

    return (
      <>
        <div className={`${"disc " + gamePiece}`} onClick={this.onClick} />
      </>
    );
  }
}

const mapStateToProps = (state: StoreState) => ({});

export const PieceWrapped = connect(
  mapStateToProps,
  { addPiece }
)(Piece);
