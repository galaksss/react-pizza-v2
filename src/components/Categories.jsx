import React, { useState } from "react";

export default function Categories() {

  const categories = ["Все", "Мясные", "Вегетарианские", "Гриль", "Острые", "Закрытые"]

  const [activeCategory, setActiveCategory] = useState("Все");
function handleCategoryClick(category) {
    setActiveCategory(category);
}

  return (
    <div>
      <div className="categories">
        <ul>
          {categories.map((value) => (
            <li onClick={() => {handleCategoryClick(value)}} className={activeCategory === value ? "active" : null}>{value}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
