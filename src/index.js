import React from "react";
import ReactDOM from "react-dom/client";


import App from "./components/App";
import Test from "./components/Test"

const app = ReactDOM.createRoot(document.getElementById("app"));
app.render(
  <React.StrictMode>
    <App nume = "Erik"/>
    <Test name = "Alex"/>
  </React.StrictMode>
);