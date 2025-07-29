import { SearchContext } from "../../App";
import s from "./Search.module.scss";
import React, { useContext, useRef } from "react";

const Search = () => {
  
  const inputRef = useRef(null)
  const {searchValue, setSearchValue} = useContext(SearchContext)

  return (
    <div className={s.root}>
      <img className={s.icon} src="./search.svg" alt="Иконка поиска" />
      <input onChange={event => setSearchValue(event.target.value)} ref={inputRef} value={searchValue} className={s.input} placeholder="Поиск пиццы..." type="text" />
      {searchValue && <img className={s.icon2} onClick={() => {
        setSearchValue('');
        inputRef.current.focus();
      }} src="./close.svg" alt="Иконка закрытия" />}
    </div>
  );
};

export default Search;
