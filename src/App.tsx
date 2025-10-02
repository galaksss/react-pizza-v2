import "./scss/app.scss";
import { lazy } from '@loadable/component';
import Home from "./components/pages/Home";
import { Routes, Route } from "react-router-dom";
import MainLayout from "./components/layouts/MainLayout";
import { Suspense } from "react";

const Cart = lazy(() => import(/* webpackChunkName: 'Cart' */ "../src/components/pages/Cart"))
const FullPizza = lazy(() => import(/* webpackChunkName: 'FullPizza' */ "../src/components/pages/FullPizza"));
const NotFound = lazy(() => import(/* webpackChunkName: 'NotFound' */ "../src/components/pages/NotFound"));
// export const SearchContext = createContext();

function App() {


  return (
    // <SearchContext.Provider value={{ searchValue, setSearchValue }}>
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route path="" element={<Home />} />
        <Route
          path="pizza/:id"
          element={
            <Suspense fallback={<h1 style={{ margin: "100px 0 700px 500px" }}>Идет загрузка...</h1>}>
              <FullPizza />
            </Suspense>
          }
        />
        <Route
          path="cart"
          element={
            <Suspense fallback={<h1 style={{ margin: "100px 0 700px 400px" }}>Идет загрузка корзины...</h1>}>
              <Cart />
            </Suspense>
          }
        />
        <Route
          path="*"
          element={
            <Suspense fallback={<h1 style={{ margin: "100px 0 700px 500px" }}>Идет загрузка...</h1>}>
              <NotFound />
            </Suspense>
          }
        />
      </Route>
    </Routes>
    // </SearchContext.Provider>
  );
}

export default App;

// const items = [ */
//   [
//   {
//     "id": "0",
//     "imageUrl": "/img/burger.png",
//     "title": "Бургер-пицца",
//     "types": [
//       0,
//       1
//     ],
//     "sizes": [
//       26,
//       30,
//       40
//     ],
//     "price": 650,
//     "category": [
//       "Вегетарианские"
//     ],
//     "rating": 4
//   },
//   {
//     "id": "1",
//     "imageUrl": "/img/pesto.png",
//     "title": "Песто",
//     "types": [
//       1
//     ],
//     "sizes": [
//       26,
//       40
//     ],
//     "price": 700,
//     "category": [
//       "Мясные"
//     ],
//     "rating": 6
//   },
//   {
//     "id": "2",
//     "imageUrl": "/img/diablo.png",
//     "title": "Диабло",
//     "types": [
//       0,
//       1
//     ],
//     "sizes": [
//       26,
//       30,
//       40
//     ],
//     "price": 803,
//     "category": [
//       "Мясные",
//       "Острые"
//     ],
//     "rating": 8
//   },
//   {
//     "id": "3",
//     "imageUrl": "/img/chillgrill.png",
//     "title": "Чилл-грилл",
//     "types": [
//       0,
//       1
//     ],
//     "sizes": [
//       26,
//       30
//     ],
//     "price": 782,
//     "category": [
//       "Гриль"
//     ],
//     "rating": 6
//   },
//   {
//     "id": "4",
//     "imageUrl": "/img/foursir.png",
//     "title": "Четыре сыра",
//     "types": [
//       0
//     ],
//     "sizes": [
//       26,
//       30,
//       40
//     ],
//     "price": 550,
//     "category": [
//       "Вегетарианские"
//     ],
//     "rating": 3
//   },
//   {
//     "id": "5",
//     "imageUrl": "/img/mix.png",
//     "title": "Додо микс",
//     "types": [
//       0,
//       1
//     ],
//     "sizes": [
//       30,
//       40
//     ],
//     "price": 869,
//     "category": [
//       "Мясные",
//       "Острые",
//       "Гриль",
//       "Закрытые"
//     ],
//     "rating": 9
//   },
//   {
//     "id": "6",
//     "imageUrl": "/img/ohota.png",
//     "title": "Охотничья",
//     "types": [
//       0,
//       1
//     ],
//     "sizes": [
//       26,
//       30,
//       40
//     ],
//     "price": 540,
//     "category": [
//       "Мясные",
//       "Острые"
//     ],
//     "rating": 7
//   },
//   {
//     "id": "7",
//     "imageUrl": "/img/hawaii.png",
//     "title": "Гавайская",
//     "types": [
//       1
//     ],
//     "sizes": [
//       26,
//       40
//     ],
//     "price": 570,
//     "category": [
//       "Вегетарианская"
//     ],
//     "rating": 5
//   },
//   {
//     "id": "8",
//     "imageUrl": "/img/teriyaki.png",
//     "title": "Терияки",
//     "types": [
//       0,
//       1
//     ],
//     "sizes": [
//       26,
//       30,
//       40
//     ],
//     "price": 680,
//     "category": [
//       "Мясные"
//     ],
//     "rating": 8
//   },
//   {
//     "id": "9",
//     "imageUrl": "/img/karbonara.png",
//     "title": "Карбонара",
//     "types": [
//       0,
//       1
//     ],
//     "sizes": [
//       30,
//       40
//     ],
//     "price": 720,
//     "category": [
//       "Мясные",
//       "Закрытые"
//     ],
//     "rating": 9
//   },
//   {
//     "id": "10",
//     "imageUrl": "/img/margarita.png",
//     "title": "Маргарита",
//     "types": [
//       0,
//       1
//     ],
//     "sizes": [
//       26,
//       30,
//       40
//     ],
//     "price": 520,
//     "category": [
//       "Вегетарианская"
//     ],
//     "rating": 8
//   },
//   {
//     "id": "11",
//     "imageUrl": "/img/gribnaya.png",
//     "title": "Грибная",
//     "types": [
//       0
//     ],
//     "sizes": [
//       30,
//       40
//     ],
//     "price": 650,
//     "category": [
//       "Вегетарианские",
//       "Закрытые"
//     ],
//     "rating": 8
//   },
//   {
//     "id": "12",
//     "imageUrl": "/img/dvoynoy-tsiplenok.png",
//     "title": "Двойной цыпленок",
//     "types": [
//       0,
//       1
//     ],
//     "sizes": [
//       26,
//       30,
//       40
//     ],
//     "price": 470,
//     "category": [
//       "Мясные",
//       "Гриль"
//     ],
//     "rating": 5
//   },
//   {
//     "id": "13",
//     "imageUrl": "/img/pepperoni.png",
//     "title": "Пепперони",
//     "types": [
//       0,
//       1
//     ],
//     "sizes": [
//       26,
//       30,
//       40
//     ],
//     "price": 489,
//     "category": [
//       "Мясные",
//       "Острые",
//       "Гриль"
//     ],
//     "rating": 7
//   },
//   {
//     "id": "14",
//     "imageUrl": "/img/tsiplenok-barbekyu.png",
//     "title": "Цыпленок барбекю",
//     "types": [
//       0
//     ],
//     "sizes": [
//       30,
//       40
//     ],
//     "price": 600,
//     "category": [
//       "Мясные",
//       "Гриль",
//       "Закрытые"
//     ],
//     "rating": 8
//   },
//   {
//     "id": "15",
//     "imageUrl": "/img/sirnaya.png",
//     "title": "Сырная",
//     "types": [
//       1
//     ],
//     "sizes": [
//       26,
//       30,
//       40
//     ],
//     "price": 420,
//     "category": [
//       "Вегетарианские"
//     ],
//     "rating": 4
//   }
// ]