import { configureStore } from "@reduxjs/toolkit";

import dataSlice from "./dataSlice";

export const store = configureStore({
  reducer: {
    data: dataSlice,
  },
});

export type appDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
