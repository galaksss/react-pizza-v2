import logo from "./logo.svg";
import "./scss/app.scss";
import Categories from "./components/Categories";
import Header from "./components/Header";
import PizzaBlock from "./components/PizzaBlock";
import Sort from "./components/Sort";

const pizzas = [
  {
    id: 0,
    imageUrl: "./img/burger.png",
    title: "Бургер-пицца",
    types: [0, 1],
    sizes: [26, 30, 40],
    price: 650,
    category: ["Все"],
    rating: 4
  },
  {
    id: 1,
    imageUrl: "./img/pesto.png",
    title: "Песто",
    types: [0],
    sizes: [26, 40],
    price: 700,
    category: ["Все", "Мясные"],
    rating: 6
  },
  {
    id: 2,
    imageUrl: "./img/diablo.png",
    title: "Диабло",
    types: [0, 1],
    sizes: [26, 30, 40],
    price: 803,
    category: ["Все", "Мясные", "Острые"],
    rating: 8
  },
  {
    id: 3,
    imageUrl: "./img/chillgrill.png",
    title: "Чилл-грилл",
    types: [0, 1],
    sizes: [26, 30],
    price: 782,
    category: ["Все", "Гриль"],
    rating: 7
  },
  {
    id: 4,
    imageUrl: "./img/foursir.png",
    title: "Четыре сыра",
    types: [0],
    sizes: [26, 30, 40],
    price: 550,
    category: ["Все", "Вегетарианские"],
    rating: 3
  },
  {
    id: 5,
    imageUrl: "./img/mix.png",
    title: "Додо микс",
    types: [0, 1],
    sizes: [ 30, 40],
    price: 869,
    category: ["Все", "Мясные", "Острые", "Гриль", "Закрытые"],
    rating: 9
  },
  {
    id: 6,
    imageUrl: "./img/ohota.png",
    title: "Охотничья",
    types: [0, 1],
    sizes: [26, 30, 40],
    price: 680,
    category: ["Все", "Мясные", "Острые",],
    rating: 7
  },
  {
    id: 7,
    imageUrl: "./img/hawaii.png",
    title: "Гавайская",
    types: [1],
    sizes: [26, 40],
    price: 680,
    category: ["Все", "Вегетарианская"],
    rating: 5
  },  
]

function App() {
  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <div className="container">
          <div className="content__top">
            <Categories />
            <Sort />
          </div>
          <h2 className="content__title">Все пиццы</h2>
          <div className="content__items">
            {pizzas.map((obj) => (
              <PizzaBlock id={obj.id} imageUrl={obj.imageUrl} title={obj.title} types={obj.types} sizes={obj.sizes} price={obj.price} category={obj.category} rating={obj.rating} /> 
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;