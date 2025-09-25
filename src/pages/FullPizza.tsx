import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";

const FullPizza: React.FC = () => {
  const navigate = useNavigate();
  const [pizza, setPizza] = useState<{
    imageUrl: string;
    title: string;
    price: number;
  }>();
  const { id } = useParams();
  useEffect(() => {
    async function fetchPizza() {
      try {
        const { data } = await axios.get(`https://685d87c1769de2bf0860fbc7.mockapi.io/items/${id}`);
        setPizza(data);
      } catch (error) {
        alert("Ошибка при получении пиццы!!!");
        navigate("/");
      }
    }
    fetchPizza();
  }, []);

  return (
    <>
      {!pizza ? (
        <h1 style={{ margin: "100px 0 700px 500px" }}>Идет загрузка...</h1>
      ) : (
        <div className="container">
          <img src={pizza.imageUrl} alt="" style={{ maxWidth: "400px" }} />
          <h2>{pizza.title}</h2>
          <h4>{pizza.price} ₽</h4>
          <Link to="/">
            <button className="button button--outline button-add">Назад</button>
          </Link>
        </div>
      )}
    </>
  );
};

export default FullPizza;
