/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable comma-dangle */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";

import { IUser } from "../interfaces/userInterface";
import { fetchDataAsync, fetchDataAsyncRepos } from "./dataAction";

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
      .addCase(fetchDataAsync.pending, (state: DataState) => {
        state.loading = true;
      })
      .addCase(
        fetchDataAsync.fulfilled,
        (state: DataState, action: PayloadAction<any>) => {
          state.loading = false;
          state.dataStateIn = action.payload;
        }
      )
      .addCase(fetchDataAsync.rejected, (state: DataState) => {
        state.loading = false;
      })

      .addCase(fetchDataAsyncRepos.pending, (state: DataState) => {
        state.loading = true;
      })
      .addCase(
        fetchDataAsyncRepos.fulfilled,
        (state: DataState, action: PayloadAction<any>) => {
          state.loading = false;
          state.dataReposState = action.payload.data;
        }
      )
      .addCase(fetchDataAsyncRepos.rejected, (state: DataState) => {
        state.loading = false;
      });
  },
});

export const getDataState = dataSliceState.reducer;

export const selectedData = (state: DataState) => state.data.dataStateIn;
export const loadingState = (state: DataState) => state.data.loading;
export const selectedReposData = (state: DataState) =>
  state.data.dataReposState;
