import * as React from "react";
import { connect } from "react-redux";
import { StoreState } from "redux/types";
import { addPiece } from "redux/actions";

interface PieceProps {
  addPiece: typeof addPiece;
  gamePiece: string;
  columnNumber: number;
  preventFurtherGamePlay: boolean;
}

class Piece extends React.Component<PieceProps> {
  onClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const { addPiece, columnNumber, preventFurtherGamePlay } = this.props;
    if (!preventFurtherGamePlay) {
      addPiece(columnNumber);
    }
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

const mapStateToProps = (state: StoreState) => ({
  preventFurtherGamePlay: state.preventFurtherGamePlay,
});

export const PieceWrapped = connect(
  mapStateToProps,
  { addPiece }
)(Piece);
