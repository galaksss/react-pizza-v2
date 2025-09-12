import "./scss/app.scss";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Cart from "./pages/Cart";
import FullPizza from "./pages/FullPizza";
import { Routes, Route } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";

// export const SearchContext = createContext();

function App() {
  return (
    // <SearchContext.Provider value={{ searchValue, setSearchValue }}>
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route path="" element={<Home />} />
        <Route path="pizza/:id" element={<FullPizza />} />
        <Route path="cart" element={<Cart />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
    // </SearchContext.Provider>
  );
}

export default App;
























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
