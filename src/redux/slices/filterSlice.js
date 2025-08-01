import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  categoryName: "Все",
  sortType: {
    name: "популярности",
    sortOption: "rating"
  },
  currentPage: 1
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
    },
    setCurrentPage(state, action) {
      state.currentPage = action.payload
    },
    setFilters(state, action) {
      state.currentPage = Number(action.payload.currentPage);
      state.sortType = action.payload.sortType;
      state.categoryName = action.payload.categoryName;
    }
  },
});

export const { setCategoryName, setSortType, setCurrentPage, setFilters } = filterSlice.actions;

export default filterSlice.reducer;