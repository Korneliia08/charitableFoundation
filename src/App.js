import './App.css';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import DefaultPanel from "./defaultPanel/defaultPanel";
import {Provider} from "react-redux";
import store from "./data/store";
import Default from "./defaultPanel/dynamicSubPages/default/Default";
import AboutUsFully from "./defaultPanel/dynamicSubPages/AboutUsFully/AboutUsFully";
import Details from "./defaultPanel/dynamicSubPages/Details/Details";
import ChoosedActivity from "./defaultPanel/dynamicSubPages/ChoosedActivity/ChoosedActivity";
import Activities from "./defaultPanel/dynamicSubPages/default/Activities/Activities";
import OurProjects from "./defaultPanel/dynamicSubPages/default/OurProjects/OurProjects";

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
                    path: "/activities",
                    element: <Activities allActivities={true}/>
                },
                {
                    path: "/projects",
                    element: <OurProjects allProjects={true}/>
                },
                {
                    path: "/activity/:id",
                    element: <ChoosedActivity/>
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
