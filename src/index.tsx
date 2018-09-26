import * as React from "react";
import * as ReactDOM from "react-dom";
import { AppWrapped as App } from "./App";
import { Provider } from "react-redux";
import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

import { reducer } from "redux/reducer";
const store = createStore(reducer, composeWithDevTools(applyMiddleware()));

import "./index.css";

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root") as HTMLElement
);
