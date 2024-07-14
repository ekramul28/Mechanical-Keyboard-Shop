import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface cartState {
  value: number;
}
type TCart = {
  _id: string;
  image: string[];
  title: string;
  brand: string;
  availableQuantity: number;
  price: number;
  rating: number;
  description: string;
  keyboardType: string;
  discount?: number;
  offer?: boolean;
  isDeleted?: boolean;
};

type TInitialState = {
  carts: TCart[];
};

const initialState: TInitialState = {
  carts: [],
};

const cartSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addCart: (state, action: PayloadAction<TCart>) => {
      state.carts.push({ ...action.payload });
    },
  },
});

export const { addCart } = cartSlice.actions;

export default cartSlice.reducer;
