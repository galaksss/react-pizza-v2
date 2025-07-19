import React, { useState } from "react";

export default function Categories({ categoryName, onChangeCategory }) {

  const categories = ["Все", "Мясные", "Вегетарианские", "Гриль", "Острые", "Закрытые"]

  return (
    <div>
      <div className="categories">
        <ul>
          {categories.map((value) => (
            <li key={value} onClick={() => {onChangeCategory(value)}} className={categoryName === value ? "active" : null}>{value}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
