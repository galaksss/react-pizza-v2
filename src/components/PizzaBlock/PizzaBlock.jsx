import React, { useState } from "react";

export default function PizzaBlock(props) {
  const typeNames = ["тонкое", "традиционное"];

  const [activeType, setActiveType] = useState(0);
  const [activeSize, setActiveSize] = useState(0);

  return (
    <div className="pizza-block-wrapper">
      <div className="pizza-block">
        <img className="pizza-block__image" src={props.imageUrl} alt="Pizza" />
        <h4 className="pizza-block__title">{props.title}</h4>
        <div className="pizza-block__selector">
          <ul>
            {props.types.map((typeId, i) => (
              <li key={i} className={activeType === i ? "active" : null} onClick={() => setActiveType(i)}>
                {typeNames[typeId]}
              </li>
            ))}
          </ul>
          <ul>
            {/* <li className="active">26 см.</li>
          <li>30 см.</li>
          <li>40 см.</li> */}
            {props.sizes.map((value, i) => (
              <li key={i} className={activeSize === i ? "active" : null} onClick={() => setActiveSize(i)}>
                {value} см.
              </li>
            ))}
          </ul>
        </div>
        <div className="pizza-block__bottom">
          <div className="pizza-block__price">от {props.price} ₽</div>
          <button className="button button--outline button--add">
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z" fill="white" />
            </svg>
            <span>Добавить</span>
            <i>0</i>
          </button>
        </div>
      </div>
    </div>
  );
}
