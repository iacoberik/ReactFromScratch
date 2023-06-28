import React from "react";
import ReactDOM from "react-dom/client";

import Welcome from "./components/Welcome";
import App from "./components/App";
import Test from "./components/Test"
import Message from "./components/Message";
import Counter from "./components/Counter";
import FunctionClick from "./components/FunctionClick";
import ClassClick from "./components/ClassClick"
import EventBind from "./components/EventBind";
import ParentComponent from "./components/ParentComponent";
import NameList from "./components/NameList";

const app = ReactDOM.createRoot(document.getElementById("app"));
app.render(
  <React.StrictMode>
    <NameList />
    <ParentComponent />
    <EventBind />
    <ClassClick />
    <FunctionClick />
    <Message />
    <Welcome name = "Batman"/>
    <App nume = "Erik">
      <p>Props Child Aici</p>
    </App>
    <App nume = "Andrei"/>
    <App nume = "Iacob"/>
    <Test name = "Andrei"/>
    <Counter />
  </React.StrictMode>
);