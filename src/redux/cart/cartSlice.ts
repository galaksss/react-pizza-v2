import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";
import getCartFromLS from "../../utils/getCartFromLS";
import totalPriceRecount from "../../utils/totalPriceRecount";
import { CartItem, CartSliceState } from "./types";

const { items, totalPrice } = getCartFromLS();

const initialState: CartSliceState = {
  items,
  totalPrice,
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
      state.totalPrice = totalPriceRecount(state.items);
    },
    removeOneItem(state, action: PayloadAction<string>) {
      const findedItem = state.items.find(obj => obj.id === action.payload);
      if (findedItem) {
        findedItem.quantity--;
        if (findedItem.quantity === 0) {
          state.items = state.items.filter(obj => obj.id !== action.payload);
        }
      }
      state.totalPrice = totalPriceRecount(state.items);
    },
    removeAllItem(state, action: PayloadAction<string>) {
      state.items = state.items.filter(obj => obj.id !== action.payload);
      state.totalPrice = totalPriceRecount(state.items);
    },
    clearItems(state) {
      state.items = [];
      state.totalPrice = 0;
    },
  },
});


export const countItemsQuantity = (state: RootState) => {
  return state.cart.items.reduce((sum, obj) => {
    return sum + obj.quantity;
  }, 0);
};



export const selectCart = (state: RootState) => state.cart;
export const selectCartItemById = (id: string) => (state: RootState) => state.cart.items.find(obj => obj.id === id);

export const { addItem, removeOneItem, removeAllItem, clearItems } = cartSlice.actions;

export default cartSlice.reducer;
