import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";

import { dataInstance, simulateFetchApi } from "./dataApi";

// eslint-disable-next-line @typescript-eslint/naming-convention
export interface DataState {
  loading: boolean;
  data: any;
}

const initialState: DataState = {
  loading: false,
  data: [],
};
export const fetchDataAsync = createAsyncThunk(
  "data/fetchData",
  async (): Promise<Array<dataInstance>> => {
    const response = await simulateFetchApi();
    return response;
  }
);

export const dataSlice = createSlice({
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
        (state: DataState, action: PayloadAction<Array<dataInstance>>) => {
          state.loading = false;
          state.data = action.payload;
        }
      )
      .addCase(fetchDataAsync.rejected, (state: DataState) => {
        state.loading = false;
      });
  },
});

export default dataSlice.reducer;
