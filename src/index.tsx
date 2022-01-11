import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import "./assets/style/index.css";
import App from "App";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter forceRefresh={true}>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root"),
);
