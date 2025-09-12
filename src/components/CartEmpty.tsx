import React from "react";
import { Link } from "react-router-dom";

import emptyCart from "../assets/img/empty-cart.png";

const CartEmpty: React.FC = () => (
    <div className="cart cart--empty">
      <h2>Корзина пустая 😕</h2>
      <img src={emptyCart} alt="Empty cart" />
      <p>
        Вероятнее всего вы еще не выбрали пиццу.
        <br />
        Перейдите на главную страницу.
      </p>
      <Link to="/" className="button button--black">
        <span>На главную</span>
      </Link>
    </div>
);

export default CartEmpty;
