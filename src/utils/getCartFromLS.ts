import totalPriceRecount from "./totalPriceRecount";

const getCartFromLS = () => {
  const data = localStorage.getItem("cart");
  const items = data ? JSON.parse(data) : [];
  const totalPrice = totalPriceRecount(items)
  
  return {
    items,
    totalPrice
  }
};

export default getCartFromLS;
