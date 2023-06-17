import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";

//import { simulateFetchApi } from "./dataApi";
import { fetchDataAsync } from "./dataAction";

// eslint-disable-next-line @typescript-eslint/naming-convention
export interface DataState {
  loading: boolean;
  data: any;
}

const initialState: DataState = {
  loading: false,
  data: [],
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
          state.data = action.payload;
        }
      )
      .addCase(fetchDataAsync.rejected, (state: DataState) => {
        state.loading = false;
      });
  },
});

export const getDataState = dataSliceState.reducer;

export const selectedData = (state: any) => state.data;
export const loadingState = (state: any) => state.data.loading;
