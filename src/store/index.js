import { combineReducers, createStore } from "redux";
import Type from "union-type";
import memoize from "ramda/src/memoize";
import path from "ramda/src/path";

export const Msg = Type({ INCREMENT: [], DECREMENT: [] });
console.warn(Msg);
const nextState = Msg.caseOn({
  INCREMENT: state => ({ count: state.count + 1 }),
  DECREMENT: state => ({ count: state.count - 1 }),
  _: state => state
});

const initialState = {
  count: 0
};

function state(state = initialState, { type = Msg.DEFAULT, payload = null }) {
  if (typeof type === "string") return state;
  return nextState(type, state);
}

export const store = createStore(
  combineReducers({
    state
  }),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
