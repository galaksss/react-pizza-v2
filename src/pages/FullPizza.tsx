import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";


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
        <p style={{margin: '100px 0px 650px 500px', fontSize: '72px'}}>
          Загрузка...
        </p>
      ) : (
        <div className="container">
          <img src={pizza.imageUrl} alt="" style={{maxWidth: '400px'}}/>
          <h2>{pizza.title}</h2>
          <h4>{pizza.price} ₽</h4>
        </div>
      )}
    </>
  );
};

export default FullPizza;
