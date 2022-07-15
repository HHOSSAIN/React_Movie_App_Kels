import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import "bootstrap"; //hasne
import "bootstrap/dist/css/bootstrap.css"; //hasne
//import "bootstrap/js/dist/dropdown";
import "bootstrap/dist/js/bootstrap.js"; //hasne
//import $ from "jquery"; //hasne
import Popper from "popper.js"; //hasne
import registerServiceWorker from "./registerServiceWorker";
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);
registerServiceWorker();
