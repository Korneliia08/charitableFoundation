import ReactDOMServer from "react-dom/server";
import { StaticRouter } from "react-router-dom/server";
import UserContext from "./serverContext.js";

import App from "./App.jsx";


export const render = ({ path,context }) => {


    return ReactDOMServer.renderToString(
        <StaticRouter location={path} >
            <UserContext.Provider value={context}>
            <App/>
            </UserContext.Provider>
        </StaticRouter>,
    );
};
