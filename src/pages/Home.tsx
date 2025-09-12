import { useRef } from "react";
import qs from "qs";

import Categories from "../components/Categories";
import PizzaBlock from "../components/PizzaBlock/PizzaBlock";
import Sort, { sortList } from "../components/Sort";
import Skeleton from "../components/PizzaBlock/Skeleton";
import Pagination from "../components/Pagination/Pagination";

import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate, Link } from "react-router-dom";

import { setCategoryName, setCurrentPage, setFilters, selectFilters } from "../redux/slices/filterSlice";
import { fetchPizzas, selectPizzaData } from "../redux/slices/pizzaSlice";

const Home: React.FC = () => {
  const { sortType, categoryName, currentPage, searchValue } = useSelector(selectFilters)
  const { items, status } = useSelector(selectPizzaData);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isSearch = useRef(false);
  const isMounted = useRef(false);


  const sortOrder = sortType.sortOption.includes("-") ? "asc" : "desc";
  const sortOptionEdited = sortType.sortOption.replace("-", "");
  
  const getPizzas = () => {
    dispatch(
      // @ts-ignore
      fetchPizzas({
        sortOrder,
        sortOptionEdited,
        categoryName,
        currentPage,
        searchValue,
      })
    );
    window.scrollTo(0, 0);
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
    if (!isSearch.current) {
      getPizzas();
    }
    isSearch.current = false;
  }, [categoryName, sortType, currentPage, searchValue]);

  useEffect(() => {
    if (isMounted.current) {
      const queryString = qs.stringify({
        currentPage,
        sortOption: sortOptionEdited,
        categoryName,
      });
      navigate(`?${queryString}`);
    }
    isMounted.current = true;
  }, [categoryName, sortType, currentPage]);

  const pizzas = items
    // .filter(obj => obj.title.toLowerCase().includes(searchValue.toLowerCase()))
    .map((obj: any) => <PizzaBlock key={obj.id} {...obj} />);

  const skeleton = [...new Array(6)].map((_, index) => <Skeleton key={index} />);
  return (
    <div className="container">
      <div className="content__top">
        <Categories categoryName={categoryName} onChangeCategory={(value: string) => dispatch(setCategoryName(value))} />
        <Sort sortType={sortType} />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      {status === 'error' ? (
        <div className="content__error-info">
          <h2>Произошла ошибка 😭</h2>
          <p>Нам очень жаль, совсем скоро всё починим!</p>
        </div>
      ) : (
      <div className="content__items">{status === 'loading' ? skeleton : pizzas}</div>
      )}
      <Pagination currentPage={currentPage} onChangePage={(page: number) => dispatch(setCurrentPage(page))} />
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
