import s from "./Search.module.scss";
import { useCallback, useRef, useState } from "react";
import debounce from "lodash.debounce";
import { useDispatch } from "react-redux";
import { setSearchValue } from "../../redux/filter/filterSlice";

const Search: React.FC = () => {
  const dispatch = useDispatch();
  const [silentSearchValue, setSilentSearchValue] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);
  const debounceRequest = useCallback(
    debounce(value => {
      dispatch(setSearchValue(value));
    }, 750),
    []
  );

  const onChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSilentSearchValue(event.target.value);
    debounceRequest(event.target.value);
  };
  return (
    <div className={s.root}>
      <img className={s.icon} src="./search.svg" alt="Иконка поиска" />
      <input onChange={event => onChangeInput(event)} ref={inputRef} value={silentSearchValue} className={s.input} placeholder="Поиск пиццы..." type="text" />
      {silentSearchValue && (
        <img
          className={s.icon2}
          onClick={() => {
            setSilentSearchValue("");
            dispatch(setSearchValue(""));
            inputRef.current?.focus();
          }}
          src="./close.svg"
          alt="Иконка закрытия"
        />
      )}
    </div>
  );
};

export default Search;
