import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";

import { IUser } from "../interfaces/userInterface";
import { fetchDataAsync } from "./dataAction";

// eslint-disable-next-line @typescript-eslint/naming-convention
export interface DataState {
  loading: boolean;
  dataState: any;
}

const initialState: DataState = {
  loading: false,
  dataState: [],
};

const dataSliceState = createSlice({
  name: "data",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchDataAsync.pending, (state: DataState) => {
        state.loading = true;
      })
      .addCase(
        fetchDataAsync.fulfilled,
        (state: DataState, action: PayloadAction<IUser>) => {
          state.loading = false;
          state.dataState = action.payload;
        }
      )
      .addCase(fetchDataAsync.rejected, (state: DataState) => {
        state.loading = false;
      });
  },
});

export const getDataState = dataSliceState.reducer;

export const selectedData = (state: any) => state.data.dataState;
export const loadingState = (state: any) => state.data.loading;
