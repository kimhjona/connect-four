import * as React from "react";
import { Board } from "components/Board";
import "./App.css";

class App extends React.Component {
  public render() {
    const gameState = [
      ["none", "none", "none", "none", "none", "none", "none"],
      ["none", "none", "none", "none", "none", "none", "none"],
      ["none", "none", "yellow", "red", "none", "none", "none"],
      ["none", "none", "red", "yellow", "none", "none", "none"],
      ["red", "yellow", "yellow", "yellow", "red", "red", "yellow"],
      ["red", "red", "yellow", "yellow", "red", "yellow", "red"],
    ];

    return (
      <div>
        <header>
          <h1 className="App-title">Welcome to Connect Four</h1>
        </header>
        <Board gameState={gameState} />
      </div>
    );
  }
}

export default App;
