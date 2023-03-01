import React, { Component } from "react";
import butt from "./res/butt";
class Calculate extends React.Component {
  constructor() {
    super();
    this.state = { out: "0" };
    this.refOutput = React.createRef();
    let st = "";
  }
  tapeNumber(value) {
    let currentValue = value;
    let output = this.refOutput.current;
    this.setState({ out: currentValue });
    output.value === "0"
      ? (output.value = currentValue)
      : (output.value += currentValue);
  }
  tapeOperation(value) {
    let output = this.refOutput.current;
    if (value === "CE") {
      output.value.length === 1
        ? (output.value = "0")
        : (output.value = output.value.substring(0, output.value.length - 1));
    } else if (value === "C") {
      output.value = "0";
    } else if (value === "=") {
      try {
        output.value = eval(output.value);
      } catch {
        output.value = "Недопустимое значение";
        setTimeout(() => {
          output.value = "0";
        }, 2500);
      }
    }
  }
  render() {
    return (
      <div id="calculate">
        <input
          defaultValue={() => {
            this.state.out;
          }}
          id="calc"
          ref={this.refOutput}
        ></input>
        {butt.operations.map((item, index) => (
          <button
            key={index}
            onClick={() => this.tapeOperation(item.val)}
            class="btn btn-warning"
          >
            {item.val}
          </button>
        ))}
        {butt.buttons.map((item, index) => (
          <button
            key={index}
            onClick={() => this.tapeNumber(item.val)}
            class="btn btn-light"
          >
            {item.val}
          </button>
        ))}
      </div>
    );
  }
}
export default Calculate;
