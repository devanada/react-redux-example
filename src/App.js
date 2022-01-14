import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Image from "react-bootstrap/Image";
import { reduxAction } from "../src/redux/actions/action";
import "./App.css";

function App() {
  const [xText, setXText] = useState("");
  const rotating = useSelector((state) => state.rotating),
    text = useSelector((state) => state.text),
    data = useSelector((state) => state.userData);
  const dispatch = useDispatch();

  return (
    <div className="App">
      <header className="App-header">
        <Image
          // src="https://pbs.twimg.com/media/FCHUy6FVcAklXjE?format=jpg&name=medium"
          src="FCHUy6FVcAklXjE.jpg"
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
        <button
          onClick={() =>
            dispatch(reduxAction("user_data", { id: 2, name: "DIA" }))
          }
        >
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
        <p>{JSON.stringify(data, null, 2)}</p>
      </header>
    </div>
  );
}

export default App;
