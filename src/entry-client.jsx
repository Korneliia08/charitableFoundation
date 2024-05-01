import ReactDOM from "react-dom/client";
import {BrowserRouter} from "react-router-dom";
import App from "./App.jsx";
import './i18n';

import 'react-responsive-modal/styles.css';
import "/node_modules/flag-icons/css/flag-icons.min.css";

ReactDOM.hydrateRoot(
    document.getElementById("app"),
    <BrowserRouter>

        <App/>
    </BrowserRouter>,
);
