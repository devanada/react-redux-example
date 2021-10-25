import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  startAction,
  stopAction,
  reduxAction,
} from "../src/redux/actions/action";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const [xText, setXText] = useState("");
  const rotating = useSelector((state) => state.rotating),
    text = useSelector((state) => state.text);
  const dispatch = useDispatch();

  return (
    <div className="App">
      <header className="App-header">
        <img
          src={logo}
          className={"App-logo" + (rotating ? "" : " App-logo-paused")}
          alt="logo"
          onClick={() =>
            // rotating ? dispatch(stopAction) : dispatch(startAction)
            dispatch(reduxAction("rotate", !rotating))
          }
        />
        <p>{text}</p>
        <input
          defaultValue={xText}
          onChange={(e) => setXText(e.target.value)}
        />
        <button onClick={() => dispatch(reduxAction("text", xText))}>
          Change
        </button>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
