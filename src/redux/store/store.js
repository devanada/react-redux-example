import { createStore } from "redux";
import { reducer } from "../reducers/reducer";

const initialState = {
  rotating: true,
  text: "Edit src/App.js and save to reload.",
};

function store(state = initialState) {
  return createStore(reducer, state);
}

export default store;
