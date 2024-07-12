import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "common/store";
import App from "app/App";
import reportWebVitals from "./reportWebVitals";

import "./styles/index.scss";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/700.css";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement,
);
root.render(
  <Provider store={store}>
    <App />
  </Provider>,
);

reportWebVitals();
