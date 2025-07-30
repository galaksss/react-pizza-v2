import React, { useContext, useRef } from "react";
import axios from "axios";
import Categories from "../components/Categories";
import PizzaBlock from "../components/PizzaBlock/PizzaBlock";
import Sort from "../components/Sort";
import Skeleton from "../components/PizzaBlock/Skeleton";

import { useEffect, useState } from "react";
import Pagination from "../scss/components/Pagination/Pagination";
import { SearchContext } from "../App";

import { useSelector, useDispatch } from "react-redux";
import { setCategoryName, setSortType } from "../redux/slices/filterSlice";

const Home = () => {
  const categoryName = useSelector(state => state.filter.categoryName);
  const sortType = useSelector(state => state.filter.sortType);
  const dispatch = useDispatch();

  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const sortOrder = sortType.sortOption.includes("-") ? "asc" : "desc";
  const sortOptionEdited = sortType.sortOption.replace("-", "");
  const { searchValue } = useContext(SearchContext);
  useEffect(() => {
    setIsLoading(true);
    // fetch(`https://685d87c1769de2bf0860fbc7.mockapi.io/items?page=${currentPage}&limit=3&sortBy=${sortOptionEdited + `${"&order=" + sortOrder}`}${categoryName && categoryName !== "Все" ? "&category=" + categoryName : ""}${searchValue ? '&search=' + searchValue : ''}`)
    //   .then(res => res.json())
    //   .then(json => {
    //     if (Array.isArray(json)) {
    //       setItems(json);
    //     } else {
    //       setItems([]);
    //     }})
    //   .then(() => setIsLoading(false));
    axios
      .get(`https://685d87c1769de2bf0860fbc7.mockapi.io/items?page=${currentPage}&limit=3&sortBy=${sortOptionEdited + `${"&order=" + sortOrder}`}${categoryName && categoryName !== "Все" ? "&category=" + categoryName : ""}${searchValue ? "&search=" + searchValue : ""}`)
      .then(res => setItems(res.data))
      .catch(() => setItems([]))
      .finally(() => setIsLoading(false));
    window.scrollTo(0, 0);
  }, [categoryName, sortType, currentPage, searchValue]);
  const pizzas = items
    // .filter(obj => obj.title.toLowerCase().includes(searchValue.toLowerCase()))
    .map(obj => <PizzaBlock key={obj.id} {...obj} />);

  const skeleton = [...new Array(6)].map((_, index) => <Skeleton key={index} />);
  return (
    <div className="container">
      <div className="content__top">
        <Categories categoryName={categoryName} onChangeCategory={value => dispatch(setCategoryName(value))} />
        <Sort
          sortType={sortType}
          onChangeSort={obj => {
            dispatch(setSortType(obj));
          }}
        />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">{isLoading ? skeleton : pizzas}</div>
      <Pagination onChangePage={number => setCurrentPage(number)} />
    </div>
  );
};

export default Home;
