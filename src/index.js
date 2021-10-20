import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-toastify/dist/ReactToastify.css";
import { BrowserRouter } from "react-router-dom";
import Login from "./components/Template/login.template";
import "../src/index.css";

ReactDOM.render(
    <BrowserRouter>
        {/* <App /> */}
        <Login />
    </BrowserRouter>,

    document.getElementById("root")
);

reportWebVitals();
