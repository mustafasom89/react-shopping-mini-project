import React from "react";
import { createRoot } from "react-dom/client";
import "./css/style.css";
import LoginPage from "./components/Login/Login";
import { Provider } from "react-redux";
import store from "./store/store";

const rootElement = document.getElementById("root");

createRoot(rootElement).render(
  <Provider store={store}>
    <LoginPage />
  </Provider>
);
