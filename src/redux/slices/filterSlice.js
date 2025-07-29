import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  categoryName: "Все",
  sortType: {
    name: "популярности",
    sortOption: "rating",
  },
};

const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setCategoryName(state, action) {
      state.categoryName = action.payload;
    },
    setSortType(state, action) {
      state.sortType = action.payload
    }
  },
});

export const { setCategoryName, setSortType } = filterSlice.actions;

export default filterSlice.reducer;