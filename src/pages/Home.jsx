import React from "react";

import Categories from "../components/Categories";
import PizzaBlock from "../components/PizzaBlock/PizzaBlock";
import Sort from "../components/Sort";
import Skeleton from "../components/PizzaBlock/Skeleton";

import { useEffect, useState } from "react";

const Home = () => {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [categoryName, setCategoryName] = useState("Все");
  const [sortType, setSortType] = useState({
    name: "популярности",
    sortOption: "rating",
  });
  const sortOrder = sortType.sortOption.includes('-') ? 'asc' : 'desc';
  const sortOptionEdited = sortType.sortOption.replace('-', '');
  console.log(sortOptionEdited)
  console.log(sortOrder)
  useEffect(() => {
    setIsLoading(true);
    fetch(`https://685d87c1769de2bf0860fbc7.mockapi.io/items?sortBy=${
        sortOptionEdited + `${'&order=' + sortOrder}`}${
        categoryName && categoryName !== "Все" ? "&category=" + categoryName : ""}`)
      .then(res => res.json())
      .then(json => setItems(json))
      .then(() => setIsLoading(false));
    window.scrollTo(0, 0);
  }, [categoryName, sortType]);

  return (
    <div className="container">
      <div className="content__top">
        <Categories categoryName={categoryName} onChangeCategory={value => setCategoryName(value)} />
        <Sort sortType={sortType} onChangeSort={obj => setSortType(obj)} />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">{isLoading ? [...new Array(6)].map((_, index) => <Skeleton key={index} />) : items.map(obj => <PizzaBlock key={obj.id} {...obj} />)}</div>
    </div>
  );
};

export default Home;
