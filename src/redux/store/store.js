import { createStore } from "redux";
import { reducer } from "../reducers/reducer";

const initialState = {
  rotating: true,
  text: "Edit src/App.js and save to reload.",
  userData: {
    id: 1,
    name: "AKU",
  },
};

function store(state = initialState) {
  return createStore(reducer, state);
}

export default store;
