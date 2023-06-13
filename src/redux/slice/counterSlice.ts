import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ICountState {
  counter: number;
}

const initialState = {
  counter: 0,
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.counter += 1;
    },
    incrementAmount: (state, action: PayloadAction<number>) => {
      state.counter += action.payload;
    },
    decrementMinus: (state, action: PayloadAction<number>) => {
      state.counter -= action.payload;
    },
  },
});

export const { incrementAmount, increment, decrementMinus } =
  counterSlice.actions;

export const counterState = counterSlice.reducer;
