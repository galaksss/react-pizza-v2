import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";

export type CartItem = {
  id: string;
  title: string;
  price: number;
  imageUrl: string;
  type: string;
  size: number;
  quantity: number;
}

interface CartSliceState {
  totalPrice: number;
  items: CartItem[];
}

const initialState: CartSliceState = {
  items: [],
  totalPrice: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem(state, action: PayloadAction<CartItem>) {
      const existItem = state.items.find(obj => obj.id === action.payload.id);
      if (existItem) {
        existItem.quantity++;
      } else {
        state.items.push({
          ...action.payload,
          quantity: 1,
        });
      }
      totalPriceRecount(state);
    },
    removeOneItem(state, action) {
      const findedItem = state.items.find(obj => obj.id === action.payload);
      if (findedItem) {
        findedItem.quantity--;
        if (findedItem.quantity === 0) {
          state.items = state.items.filter(obj => obj.id !== action.payload);
        }
      }
      totalPriceRecount(state);
    },
    removeAllItem(state, action) {
      state.items = state.items.filter(obj => obj.id !== action.payload);
      totalPriceRecount(state);
    },
    clearItems(state) {
      state.items = [];
      state.totalPrice = 0;
    },
  },
});


const totalPriceRecount = (state: CartSliceState) => {
  state.totalPrice = state.items.reduce((sum, obj) => {
    return sum + obj.price * obj.quantity;
  }, 0);
};

export const countItemsQuantity = (state: RootState) => {
  return state.cart.items.reduce((sum, obj) => {
    return sum + obj.quantity;
  }, 0);
};


export const selectCart = (state: RootState) => state.cart;
export const selectCartItemById = (id: string) => (state: RootState) => state.cart.items.find(obj => obj.id === id);

export const { addItem, removeOneItem, removeAllItem, clearItems } = cartSlice.actions;

export default cartSlice.reducer;
