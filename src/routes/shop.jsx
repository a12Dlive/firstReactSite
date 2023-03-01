import React, { Component } from "react";
import { Basket } from "./res/basket";
import { Items } from "./res/Items";
class Shop extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      orders: [],
      items: [
        {
          id: 1,
          title: "Банан",
          img: "banana.jpg",
          category: "food",
          price: "79.99",
          quantity: 1,
        },
        {
          id: 2,
          title: "Огурец",
          img: "odurec.jpg",
          category: "food",
          price: "139.99",
          quantity: 1,
        },
        {
          id: 3,
          title: "Помидор",
          img: "pomidor.jpg",
          category: "food",
          price: "56.99",
          quantity: 1,
        },
      ],
    };
    this.addToOrder = this.addToOrder.bind(this);
    this.deleteOrder = this.deleteOrder.bind(this);
  }
  addToOrder(item) {
    let isArr = false;
    this.state.orders.forEach((el) => {
      if (el.id === item.id) {
        isArr = true;
        el.quantity = el.quantity + 1;
      }
    });
    if (!isArr) this.setState({ orders: [...this.state.orders, item] });
    else this.setState({ orders: [...this.state.orders] });
  }
  deleteOrder(id) {
    this.setState({
      orders: [...this.state.orders.filter((el) => el.id != id)],
    });
    this.state.orders.forEach((el) => {
      if ((el.id = id)) el.quantity = 1;
    });
  }
  render() {
    return (
      <div style={{ margin: "1em" }}>
        <Items items={this.state.items} onAdd={this.addToOrder}></Items>
        <div>
          <Basket orders={this.state.orders} onDelete={this.deleteOrder} />
        </div>
      </div>
    );
  }
}
export default Shop;
