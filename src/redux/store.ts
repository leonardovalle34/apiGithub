import { configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";

import dataSlice from "./dataSlice";

export const store = configureStore({
  reducer: {
    data: dataSlice,
  },
  middleware: [thunk],
});

export type appDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
