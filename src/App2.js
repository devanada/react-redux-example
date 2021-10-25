import React, { Component } from "react";
import { connect } from "react-redux";
import {
  startAction,
  stopAction,
  reduxAction,
} from "../src/redux/actions/action";
import logo from "./logo.svg";
import "./App.css";

class App2 extends Component {
  state = {
    xText: "",
  };

  render() {
    const { xText } = this.state;
    return (
      <div className="App">
        <header className="App-header">
          <img
            src={logo}
            className={
              "App-logo" + (this.props.rotating ? "" : " App-logo-paused")
            }
            alt="logo"
            onClick={() =>
              //   this.props.rotating
              //     ? this.props.stopAction
              //     : this.props.startAction
              this.props.reduxAction("rotate", !this.props.rotating)
            }
          />
          <p>{this.props.text}</p>
          <input
            defaultValue={xText}
            onChange={(e) => this.setState({ xText: e.target.value })}
          />
          <button onClick={() => this.props.reduxAction("text", xText)}>
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
}

const mapStateToProps = (state) => ({
  rotating: state.rotating,
  text: state.text,
});

const mapDispatchToProps = (dispatch) => ({
  startAction: () => dispatch(startAction),
  stopAction: () => dispatch(stopAction),
  reduxAction: (type, payload) => dispatch(reduxAction(type, payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App2);
