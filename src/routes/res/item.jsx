import React, { Component } from "react";
export class Item extends React.Component {
  render() {
    return (
      <div id="card">
        <img src={"./img/" + this.props.item.img} id="cardimg" />
        <h2>{this.props.item.title}</h2>
        <p>{this.props.item.desc}</p>
        <b>{this.props.item.price}₽</b>
        <div id="addtocart" onClick={() => this.props.onAdd(this.props.item)}>
          +
        </div>
      </div>
    );
  }
}
