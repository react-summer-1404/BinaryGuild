import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
};

export const FilterAcceptReducer = createSlice({
  name: "accept",
  initialState,
  reducers: {
    increment: (state) => {
      state.value = ("border-red text-red")
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
  },
});

export const { increment, decrement, incrementByAmount } =
  FilterAcceptReducer.actions;
export default FilterAcceptReducer.reducer;
