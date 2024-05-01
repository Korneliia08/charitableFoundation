import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import './i18n';
import {Suspense} from "react";


ReactDOM.hydrateRoot(
    document.getElementById("app"),
    <BrowserRouter>

        <App/>
    </BrowserRouter>,
);
