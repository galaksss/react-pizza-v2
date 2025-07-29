import logo from "./logo.svg";
import "./scss/app.scss";
import Header from "./components/Header";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Cart from "./pages/Cart";
import { Routes, Route } from "react-router-dom";
import { createContext, useState } from "react";


export const SearchContext = createContext();

function App() {

  const [searchValue, setSearchValue] = useState("");
  return (
    <SearchContext.Provider value={{ searchValue, setSearchValue }}>
      <div className="wrapper">
        <Header />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home searchValue={searchValue} />} />
            <Route path="*" element={<NotFound />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </div>
      </div>
    </SearchContext.Provider>
  );
}

export default App;



// import { useSelector, useDispatch } from "react-redux";
// import { add, remove } from "./redux/slices/todoSlice";

  // const cases = useSelector(state => state.todo.value);
  // const dispatch = useDispatch();
  // const [case1, setCase1] = useState("");


/* <div className="asd">
          <input onKeyDown={(event) => {
            if (event.key === 'Enter' && case1) {
              dispatch(add(case1));
              setCase1("");
            }
          }} value={case1} onChange={event => setCase1(event.target.value)} type="text" placeholder="Дело..." />
          <button
            onClick={() => {
              if (case1) {
              dispatch(add(case1));
              setCase1("");
              }
              console.log(case1);
            }}>
            Добавить дело
          </button>
          <div className="h1">
            {cases.map((delo, i) => {
              return (
              <div key={i}>
                <p>{delo}<button onClick={() => {
                  dispatch(remove(delo))
                  }}> УДАЛИТЬ ДЕЛО </button></p>
              </div>)
            })}
          </div>
        </div>


// const items = [ */
//   {
//     id: 0,
//     imageUrl: "./img/burger.png",
//     title: "Бургер-пицца",
//     types: [0, 1],
//     sizes: [26, 30, 40],
//     price: 650,
//     category: ["Все"],
//     rating: 4
//   },
//   {
//     id: 1,
//     imageUrl: "./img/pesto.png",
//     title: "Песто",
//     types: [1],
//     sizes: [26, 40],
//     price: 700,
//     category: ["Все", "Мясные"],
//     rating: 6
//   },
//   {
//     id: 2,
//     imageUrl: "./img/diablo.png",
//     title: "Диабло",
//     types: [0, 1],
//     sizes: [26, 30, 40],
//     price: 803,
//     category: ["Все", "Мясные", "Острые"],
//     rating: 8
//   },
//   {
//     id: 3,
//     imageUrl: "./img/chillgrill.png",
//     title: "Чилл-грилл",
//     types: [0, 1],
//     sizes: [26, 30],
//     price: 782,
//     category: ["Все", "Гриль"],
//     rating: 7
//   },
//   {
//     id: 4,
//     imageUrl: "./img/foursir.png",
//     title: "Четыре сыра",
//     types: [0],
//     sizes: [26, 30, 40],
//     price: 550,
//     category: ["Все", "Вегетарианские"],
//     rating: 3
//   },
//   {
//     id: 5,
//     imageUrl: "./img/mix.png",
//     title: "Додо микс",
//     types: [0, 1],
//     sizes: [ 30, 40],
//     price: 869,
//     category: ["Все", "Мясные", "Острые", "Гриль", "Закрытые"],
//     rating: 9
//   },
//   {
//     id: 6,
//     imageUrl: "./img/ohota.png",
//     title: "Охотничья",
//     types: [0, 1],
//     sizes: [26, 30, 40],
//     price: 680,
//     category: ["Все", "Мясные", "Острые",],
//     rating: 7
//   },
//   {
//     id: 7,
//     imageUrl: "./img/hawaii.png",
//     title: "Гавайская",
//     types: [1],
//     sizes: [26, 40],
//     price: 680,
//     category: ["Все", "Вегетарианская"],
//     rating: 5
//   },
// ]
