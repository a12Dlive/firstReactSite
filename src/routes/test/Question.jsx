import React, { Component } from "react";
import { Outlet, Link, NavLink } from "react-router-dom";

class Question extends React.Component {
  render() {
    return (
      <div id="question">
        <p>{this.props.items}</p>
        <input
          type="radio"
          name={this.props.items}
          value={this.props.val1}
          id={this.props.ans1}
          onChange={() => this.props.addAnswer(this.props.val1, this.props.id)}
        />
        <label htmlFor={this.props.ans1}>{this.props.ans1}</label>
        <br />
        <input
          type="radio"
          name={this.props.items}
          value={this.props.val2}
          id={this.props.ans2}
          onChange={() => this.props.addAnswer(this.props.val2, this.props.id)}
        />
        <label htmlFor={this.props.ans2}>{this.props.ans2}</label>
        <br />
        <input
          type="radio"
          name={this.props.items}
          value={this.props.val3}
          id={this.props.ans3}
          onChange={() => this.props.addAnswer(this.props.val3, this.props.id)}
        />
        <label htmlFor={this.props.ans3}>{this.props.ans3}</label>
        <br />
      </div>
    );
  }
}
export default Question;
