import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { CountContextProvider } from "./context/CountContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <CountContextProvider>
      <App />
    </CountContextProvider>
  </React.StrictMode>
);
