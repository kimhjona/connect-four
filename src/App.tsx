import * as React from "react";
import { connect } from "react-redux";
import { clear } from "redux/actions";
import { Board } from "components/Board";
import "./App.css";
import { StoreState } from "redux/types";

interface AppProps {
  clear: typeof clear;
  gameState: string[][];
  message: string;
  preventFurtherGamePlay: boolean;
  turn: string;
}

class App extends React.Component<AppProps> {
  render() {
    const {
      clear,
      message,
      gameState,
      preventFurtherGamePlay,
      turn,
    } = this.props;

    return (
      <div>
        <header>
          <h1 className="App-title">Welcome to Connect Four</h1>
          <h2 className="message">{message}</h2>
        </header>
        <div className="menu">
          <button onClick={clear}>Clear</button>
          {!preventFurtherGamePlay && (
            <div>
              <h2>Next Move:</h2>
              <div className={`disc ${turn}`} />
            </div>
          )}
        </div>
        <Board gameState={gameState} />
      </div>
    );
  }
}

const mapStateToProps = (state: StoreState) => ({
  gameState: state.gameState,
  message: state.message,
  preventFurtherGamePlay: state.preventFurtherGamePlay,
  turn: state.turn,
});

export const AppWrapped = connect(
  mapStateToProps,
  {
    clear,
  }
)(App);
