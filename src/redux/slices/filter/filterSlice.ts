import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../store";
import { FilterSliceState, SortItem } from "./types";

export enum SortPropertyEnum {
  RATING_DESC = 'rating',
  PRICE_DESC = 'price',
  PRICE_ASC = '-price',
  TITLE_ASC = '-title',
}

const initialState: FilterSliceState = {
  searchValue: '',
  categoryName: "Все",
  sortType: {
    name: "популярности",
    sortOption: SortPropertyEnum.RATING_DESC
  },
  currentPage: 1
};

const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setSearchValue(state, action: PayloadAction<string>) {
      state.searchValue = action.payload;
    },
    setCategoryName(state, action: PayloadAction<string>) {
      state.categoryName = action.payload;
    },
    setSortType(state, action: PayloadAction<SortItem>) {
      state.sortType = action.payload
    },
    setCurrentPage(state, action: PayloadAction<number>) {
      state.currentPage = action.payload
    },
    setFilters(state, action: PayloadAction<FilterSliceState>) {
      state.currentPage = Number(action.payload.currentPage);
      state.sortType = action.payload.sortType;
      state.categoryName = action.payload.categoryName;
    }
  },
});

export const selectFilters = (state: RootState) => state.filter;

export const { setSearchValue, setCategoryName, setSortType, setCurrentPage, setFilters } = filterSlice.actions;

export default filterSlice.reducer;