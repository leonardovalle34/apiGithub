import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";

// eslint-disable-next-line import-helpers/order-imports
import { Provider } from "react-redux";

import { store } from "./redux/store.ts";
import AppRoutes from "./Routes.tsx";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <AppRoutes />
    </Provider>
  </React.StrictMode>
);
