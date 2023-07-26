/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable comma-dangle */
/* eslint-disable prettier/prettier */
import { createAsyncThunk } from "@reduxjs/toolkit";

import { api } from "../utils/api";

export const fetchDataAndReposAsync = createAsyncThunk(
  "data/fetchDataAndRepos",
  async (user: string): Promise<any> => {
    const dataResponse = await api.get(user);
    const reposResponse = await api.get(`${user}/repos`);
    return { data: dataResponse, repos: reposResponse };
  }
);
