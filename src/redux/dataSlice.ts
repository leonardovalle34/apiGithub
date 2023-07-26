/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable comma-dangle */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { IUser } from "../interfaces/userInterface";
import { fetchDataAndReposAsync } from "./dataAction";

// eslint-disable-next-line @typescript-eslint/naming-convention
interface DataState {
  loading: boolean;
  dataStateIn: IUser[];
  dataReposState: any;
}

const initialState: DataState = {
  loading: false,
  dataStateIn: [],
  dataReposState: [],
};

const dataSliceState = createSlice({
  name: "data",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchDataAndReposAsync.pending, (state: DataState) => {
        state.loading = true;
      })
      .addCase(
        fetchDataAndReposAsync.fulfilled,
        (state: DataState, action: PayloadAction<any>) => {
          state.loading = false;
          state.dataStateIn = action.payload.data;
          state.dataReposState = action.payload.repos;
        }
      )
      .addCase(fetchDataAndReposAsync.rejected, (state: DataState) => {
        state.loading = false;
      });
  },
});

export const getDataState = dataSliceState.reducer;

export const selectedData = (state: any) => state.data.dataStateIn;
export const loadingState = (state: any) => state.data.loading;
export const selectedReposData = (state: any) => state.data.dataReposState;
