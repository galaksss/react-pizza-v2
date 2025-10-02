import { Status } from "./pizzaSlice";

export interface Pizza {
  id: string;
  title: string;
  price: number;
  imageUrl: string;
  sizes: number[];
  types: number[];
  category: string[];
  rating: number;
};

export interface PizzaSliceState {
  items: Pizza[];
  status: Status;
}

export interface FetchPizzasParams {
  sortOptionEdited: string;
  categoryName: string;
  currentPage: number;
  sortOrder: string;
  searchValue: string;
}