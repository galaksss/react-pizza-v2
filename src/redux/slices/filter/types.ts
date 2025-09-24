import { SortPropertyEnum } from "./filterSlice";

export type SortItem = {
  name: string;
  sortOption: SortPropertyEnum;
};

export interface FilterSliceState {
  searchValue: string;
  categoryName: string;
  sortType: SortItem;
  currentPage: number;
};