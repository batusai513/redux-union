import React from "react";
import logo from "./logo.svg";
import { Msg } from "./store";
import "./App.css";
import { connect } from 'react-redux';

function App({count, increment, decrement}) {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">{count}</h1>
      </header>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>decrement</button>
    </div>
  );
}

function mapStateToProps(state) {
  return {
    count: state.state.count
  };
}

function mapDispatchToProps(dispatch) {
  return {
    increment() {
      return dispatch({ type: Msg.INCREMENT });
    },
    decrement() {
      return dispatch({ type: Msg.DECREMENT });
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);