import { CartItem } from "../redux/cart/types";

const totalPriceRecount = (items: CartItem[]) => {
  return items.reduce((sum, obj) => {
    return sum + obj.price * obj.quantity;
  }, 0);
};

export default totalPriceRecount;