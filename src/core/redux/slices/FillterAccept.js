import { createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit";

export const FilterAcceptReducer = createSlice({
  name: "accept",
  initialState,
  reducers: {
    increment: (state) => {},
    decrement: (state) => {},
    incrementByAmount: (state, action: PayloadAction) => {},
  },
});

export const { increment, decrement, incrementByAmount } = FilterAccept.actions;
export default FilterAccept.reducer;
