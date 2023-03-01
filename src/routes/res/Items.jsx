import React, { Component } from "react";
import { Item } from "./item";

export class Items extends React.Component {
  render() {
    return (
      <>
        <main id="shop">
          {this.props.items.map((el) => (
            <Item key={el.id} item={el} onAdd={this.props.onAdd}></Item>
          ))}
        </main>
      </>
    );
  }
}
