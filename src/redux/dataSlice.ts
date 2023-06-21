import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";

import { IUser } from "../interfaces/userInterface";
import { fetchDataAsync, fetchDataAsyncRepos } from "./dataAction";

// eslint-disable-next-line @typescript-eslint/naming-convention
export interface DataState {
  [x: string]: IUser;
  loading: boolean;
  dataState: IUser[];
  dataReposState: any;
}

const initialState: DataState = {
  loading: false,
  dataState: [],
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
        (state: DataState, action: PayloadAction<IUser>) => {
          state.loading = false;
          state.dataState = action.payload;
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
          state.dataReposState = action.payload;
        }
      )
      .addCase(fetchDataAsyncRepos.rejected, (state: DataState) => {
        state.loading = false;
      });
  },
});

export const getDataState = dataSliceState.reducer;

export const selectedData = (state: IUser) => state.data.dataState;
export const loadingState = (state: boolean) => state.data.loading;
export const selectedReposData = (state: any) => state.data.dataReposState;
