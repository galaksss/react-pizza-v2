import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import { RootState } from "../../store";
import { Pizza, PizzaSliceState } from "./types";

export enum Status {
  LOADING = "loading",
  SUCCESS = "success",
  ERROR = "error",
}

const initialState: PizzaSliceState = {
  items: [],
  status: Status.LOADING,
};

const pizzaSlice = createSlice({
  name: "pizza",
  initialState,
  reducers: {
    setItems(state, action: PayloadAction<Pizza[]>) {
      state.items = action.payload;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchPizzas.pending, state => {
        state.status = Status.LOADING;
        state.items = [];
      })
      .addCase(fetchPizzas.fulfilled, (state, action: PayloadAction<Pizza[]>) => {
        state.items = action.payload;
        state.status = Status.SUCCESS;
      })
      .addCase(fetchPizzas.rejected, state => {
        state.status = Status.ERROR;
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


export interface FetchPizzasParams {
  sortOptionEdited: string;
  categoryName: string;
  currentPage: number;
  sortOrder: string;
  searchValue: string;
}
export const fetchPizzas = createAsyncThunk<Pizza[], FetchPizzasParams>("pizza/fetchPizzaStatus", async params => {
  const { sortOrder, sortOptionEdited, categoryName, currentPage, searchValue } = params;
  const { data } = await axios.get<Pizza[]>(`https://685d87c1769de2bf0860fbc7.mockapi.io/items?page=${currentPage}&limit=3&sortBy=${sortOptionEdited + `${"&order=" + sortOrder}`}${categoryName && categoryName !== "Все" ? "&category=" + categoryName : ""}${searchValue ? "&search=" + searchValue : ""}`);
  return data;
});

export const selectPizzaData = (state: RootState) => state.pizza;

export const { setItems } = pizzaSlice.actions;

export default pizzaSlice.reducer;
