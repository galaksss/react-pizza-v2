import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

type Sort = {
  name: string;
  sortOption: 'rating' | 'price' | 'price-' | 'title-';
};

interface FilterSliceState {
  searchValue: string;
  categoryName: string;
  sortType: Sort;
  currentPage: number;
};


const initialState: FilterSliceState = {
  searchValue: '',
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
    setSearchValue(state, action) {
      state.searchValue = action.payload;
    },
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

export const selectFilters = (state: RootState) => state.filter;

export const { setSearchValue, setCategoryName, setSortType, setCurrentPage, setFilters } = filterSlice.actions;

export default filterSlice.reducer;