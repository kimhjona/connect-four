import * as React from "react";
import { connect } from "react-redux";
import { clear } from "redux/actions";
import { Board } from "components/Board";
import "./App.css";
import { StoreState } from "redux/types";

interface AppProps {
  clear: typeof clear;
  message: string;
  row0: string[];
  row1: string[];
  row2: string[];
  row3: string[];
  row4: string[];
  row5: string[];
}

class App extends React.Component<AppProps> {
  render() {
    const { clear, message, row0, row1, row2, row3, row4, row5 } = this.props;

    return (
      <div>
        <header>
          <h1 className="App-title">Welcome to Connect Four</h1>
          <h2 className="message">{message}</h2>
        </header>
        <div className="menu">
          <button onClick={clear}>Clear</button>
        </div>
        <Board
          row0={row0}
          row1={row1}
          row2={row2}
          row3={row3}
          row4={row4}
          row5={row5}
        />
      </div>
    );
  }
}

const mapStateToProps = (state: StoreState) => ({
  message: state.message,
  row0: state.row0,
  row1: state.row1,
  row2: state.row2,
  row3: state.row3,
  row4: state.row4,
  row5: state.row5,
});

export const AppWrapped = connect(
  mapStateToProps,
  {
    clear,
  }
)(App);
