import React from "react";

type CategoriesProps = {
  categoryName: string;
  onChangeCategory: (value: string) => void;
};
const categories = ["Все", "Мясные", "Вегетарианские", "Гриль", "Острые", "Закрытые"];

const Categories: React.FC<CategoriesProps> = ({ categoryName, onChangeCategory }) => {

  return (
    <div>
      <div className="categories">
        <ul>
          {categories.map(value => (
            <li
              key={value}
              onClick={() => {
                onChangeCategory(value);
              }}
              className={categoryName === value ? "active" : ""}>
              {value}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Categories;
