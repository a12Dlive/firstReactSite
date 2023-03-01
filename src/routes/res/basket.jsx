import React, { Component } from "react";
import { Ibas } from "./ibas";
const showOrders = (props) => {
  let sum = 0;
  props.orders.forEach(
    (el) => (sum = sum + Number.parseFloat(el.price).toFixed(2) * el.quantity)
  );
  return (
    <div>
      {props.orders.map((el) => (
        <Ibas key={el.id} item={el} onDelete={props.onDelete} />
      ))}
      <h1 id="sum">Итого: {parseFloat(sum).toFixed(2)}₽</h1>
    </div>
  );
};
const showNothing = () => {
  return (
    <div>
      <h3>Корзина пуста</h3>
    </div>
  );
};
export class Basket extends React.Component {
  render() {
    return (
      <main id="basket">
        <h2 style={{ width: "100%" }}>Корзина магазина</h2>
        {this.props.orders.length > 0 ? showOrders(this.props) : showNothing()}
      </main>
    );
  }
}
