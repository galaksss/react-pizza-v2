import { CartItem } from "../redux/slices/cart/types";


const totalPriceRecount = (items: CartItem[]) => {
  return items.reduce((sum, obj) => {
    return sum + obj.price * obj.quantity;
  }, 0);
};

export default totalPriceRecount;