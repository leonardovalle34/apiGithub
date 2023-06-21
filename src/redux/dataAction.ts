/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable comma-dangle */
/* eslint-disable prettier/prettier */
import { createAsyncThunk } from "@reduxjs/toolkit";

import { api } from "../utils/api";

export const fetchDataAsync = createAsyncThunk(
  "data/fetchData",
  async (user: string): Promise<any> => {
    const response = await api.get(user);
    return response;
  }
);

export const fetchDataAsyncRepos = createAsyncThunk(
  "dataRepos/fetchData",
  async (user: string): Promise<any> => {
    const response = await api.get(`${user}/repos`);
    return response;
  }
);
