import React, { useContext, useRef } from "react";
import qs from "qs";
import axios from "axios";

import Categories from "../components/Categories";
import PizzaBlock from "../components/PizzaBlock/PizzaBlock";
import Sort, { sortList } from "../components/Sort";
import Skeleton from "../components/PizzaBlock/Skeleton";
import Pagination from "../scss/components/Pagination/Pagination";

import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import { SearchContext } from "../App";
import { setCategoryName, setSortType, setCurrentPage, setFilters } from "../redux/slices/filterSlice";

const Home = () => {
  const categoryName = useSelector(state => state.filter.categoryName);
  const sortType = useSelector(state => state.filter.sortType);
  const currentPage = useSelector(state => state.filter.currentPage);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isSearch = useRef(false);
  
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { searchValue } = useContext(SearchContext);
  const sortOrder = sortType.sortOption.includes("-") ? "asc" : "desc";
  const sortOptionEdited = sortType.sortOption.replace("-", "");
  
  const fetchPizzas = () => {
    setIsLoading(true);


    axios
      .get(`https://685d87c1769de2bf0860fbc7.mockapi.io/items?page=${currentPage}&limit=3&sortBy=${sortOptionEdited + `${"&order=" + sortOrder}`}${categoryName && categoryName !== "Все" ? "&category=" + categoryName : ""}${searchValue ? "&search=" + searchValue : ""}`)
      .then(res => setItems(res.data))
      .catch(() => setItems([]))
      .finally(() => setIsLoading(false));
  };

  useEffect(() => {
    if (window.location.search) {
      isSearch.current = true;
      const params = qs.parse(window.location.search.substring(1));
      const sortType = sortList.find(obj => obj.sortOption === params.sortOption);
      dispatch(
        setFilters({
          ...params,
          sortType,
        })
      );
    }
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
    if (!isSearch.current) {
      fetchPizzas()
    }
    isSearch.current = false

  }, [categoryName, sortType, currentPage, searchValue]);

  useEffect(() => {
    const queryString = qs.stringify({
      currentPage,
      sortOption: sortOptionEdited,
      categoryName,
    });
    navigate(`?${queryString}`);
  }, [categoryName, sortType, currentPage]);
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
      <Pagination onChangePage={number => dispatch(setCurrentPage(number))} />
    </div>
  );
};

export default Home;

// fetch(`https://685d87c1769de2bf0860fbc7.mockapi.io/items?page=${currentPage}&limit=3&sortBy=${sortOptionEdited + `${"&order=" + sortOrder}`}${categoryName && categoryName !== "Все" ? "&category=" + categoryName : ""}${searchValue ? '&search=' + searchValue : ''}`)
//   .then(res => res.json())
//   .then(json => {
//     if (Array.isArray(json)) {
//       setItems(json);
//     } else {
//       setItems([]);
//     }})
//   .then(() => setIsLoading(false));
