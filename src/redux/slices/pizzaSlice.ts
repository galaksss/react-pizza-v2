import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { RootState } from "../store";

type Pizza = {
  id: string;
  title: string;
  price: number;
  imageUrl: string;
  sizes: number[];
  types: number[];
}

interface PizzaSliceState {
  items: Pizza[];
  status: 'loading' | 'success' | 'error'
}

const initialState: PizzaSliceState = {
  items: [],
  status: "loading", // loading success error
};

const pizzaSlice = createSlice({
  name: "pizza",
  initialState,
  reducers: {
    setItems(state, action) {
      state.items = action.payload;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchPizzas.pending, state => {
        state.status = "loading";
        state.items = [];
      })
      .addCase(fetchPizzas.fulfilled, (state, action) => {
        state.items = action.payload;
        state.status = "success";
      })
      .addCase(fetchPizzas.rejected, state => {
        state.status = "error";
        state.items = [];
      });
    },

    //   [fetchPizzas.pending]: () => {
  //     console.log('Идет отправка')
  //   },
  //   [fetchPizzas.fulfilled]: (state) => {
    //     console.log(state, 'ВСЕ ОК')
    //   },
    //   [fetchPizzas.rejected]: () => {
      //     console.log('Была ошибка')
      //   }
      // }
    });

    export const fetchPizzas = createAsyncThunk("pizza/fetchPizzaStatus", async params => {
      const { sortOrder, sortOptionEdited, categoryName, currentPage, searchValue } = params;
      const { data } = await axios.get(`https://685d87c1769de2bf0860fbc7.mockapi.io/items?page=${currentPage}&limit=3&sortBy=${sortOptionEdited + `${"&order=" + sortOrder}`}${categoryName && categoryName !== "Все" ? "&category=" + categoryName : ""}${searchValue ? "&search=" + searchValue : ""}`);
      return data;
    });

export const selectPizzaData = (state: RootState) => state.pizza;


export const { setItems } = pizzaSlice.actions;

export default pizzaSlice.reducer;
