import Start from "./test/Start";
import Question from "./test/Question";
import input from "./test/input";
import Result from "./test/Result";
import React, { Component } from "react";
class Tester extends React.Component {
  constructor(props) {
    super(props);
    this.state = { answer: 0, orders: [] };
    this.addAnswer = this.addAnswer.bind(this);
    this.res = this.res.bind(this);
  }
  addAnswer(el, id) {
    let isArr = false;
    this.state.orders.forEach((elem) => {
      if (elem === id) {
        isArr = true;
      }
    });
    if (!isArr && el === "yes") {
      this.setState({ orders: [...this.state.orders, id] });
      this.setState({ answer: this.state.answer + 1 });
    }
  }
  res() {
    this.setState({ orders: [] });
    this.setState({ answer: 0 });
  }
  render() {
    return (
      <div>
        {input.questions.map((el) => (
          <Question
            items={el.quest}
            ans1={el.ans1}
            ans2={el.ans2}
            ans3={el.ans3}
            val1={el.val1}
            val2={el.val2}
            val3={el.val3}
            id={el.id}
            key={el.quest}
            addAnswer={this.addAnswer}
          />
        ))}
        <Result answer={this.state.answer} res={this.res} />
      </div>
    );
  }
}
export default Tester;
