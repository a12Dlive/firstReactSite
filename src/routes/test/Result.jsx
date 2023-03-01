import React, { Component } from "react";
import { Outlet, Link, NavLink } from "react-router-dom";
import Question from "./Question";
class Question2 extends React.Component {
  render() {
    return (
      <div id="question">
        <div id="result">
          <h1>{this.props.answer}</h1>
        </div>
        <button onClick={() => this.props.res()}>Restart</button>
      </div>
    );
  }
}
export default Question2;
