import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";

import App from "./App";

function BookList() {
  return <App></App>;
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
