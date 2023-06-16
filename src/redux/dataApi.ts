import { Dispatch } from "redux";

import { api } from "../utils/api";

export async function simulateFetchApi(user: string) {
  return async (dispatch: Dispatch) => {
    const res = await api.get(user);
  };
}
