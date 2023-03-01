import React, { Component } from "react";
export class Ibas extends React.Component {
  render() {
    return (
      <div id="bas">
        <img src={"./img/" + this.props.item.img} />
        <div>
          <h2>{this.props.item.title}</h2>
          <b style={{ color: "red" }}>Цена:{this.props.item.price}₽</b>
          <p>Всего: {this.props.item.quantity},00 kg</p>
          <b>
            Итого:{" "}
            {parseFloat(
              this.props.item.quantity *
                Number.parseFloat(this.props.item.price)
            ).toFixed(2)}
            ₽
          </b>
          <br />
          <button
            id="delete"
            onClick={() => this.props.onDelete(this.props.item.id)}
          >
            Убрать из корзины
          </button>
        </div>
      </div>
    );
  }
}
