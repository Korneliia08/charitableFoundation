import './App.css';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import DefaultPanel from "./defaultPanel/defaultPanel";
import {Provider} from "react-redux";
import store from "./data/store";
import Default from "./defaultPanel/dynamicSubPages/default/Default";
import AboutUsFully from "./defaultPanel/dynamicSubPages/AboutUsFully/AboutUsFully";
import Details from "./defaultPanel/dynamicSubPages/Details/Details";

function App() {
    const router = createBrowserRouter([
        {
            path: "/",
            element: <DefaultPanel/>,
            children: [
                {
                    path: "/",
                    element: <Default/>
                },
                {
                    path: "/aboutUs",
                    element: <AboutUsFully/>
                },
                {
                    path: "/details",
                    element: <Details/>
                }
            ],
        },
    ], {basename: "/charitableFoundation"});
    return (
        <div className="App">
            <Provider store={store}>
                <RouterProvider router={router}/>
            </Provider>
        </div>
    );
}

export default App;
