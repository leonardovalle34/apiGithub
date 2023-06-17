import { createAsyncThunk } from "@reduxjs/toolkit";

import { api } from "../utils/api";

export const fetchDataAsync = createAsyncThunk(
  "data/fetchData",
  async (user: string): Promise<any> => {
    const response = await api.get(user);
    return response;
  }
);
