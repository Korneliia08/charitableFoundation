import './App.css';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import DefaultPanel from "./defaultPanel/defaultPanel";
import {Provider} from "react-redux";
import store from "./data/store";
import Default from "./defaultPanel/dynamicSubPages/default/Default";
import AboutUsFully from "./defaultPanel/dynamicSubPages/AboutUsFully/AboutUsFully";
import Details from "./defaultPanel/dynamicSubPages/Details/Details";
import ChoosedAspect from "./defaultPanel/dynamicSubPages/ChoosedAspect/ChoosedAspect";
import AspectsOfTheProject from "./defaultPanel/dynamicSubPages/default/AspectsOfTheProject/AspectsOfTheProject";
import OurProjects from "./defaultPanel/dynamicSubPages/default/OurProjects/OurProjects";
import {ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import Donat from "./defaultPanel/dynamicSubPages/Donat/Donat";
import ErrorComponent from "./components/ErrorComponent/ErrorComponent";
import ChoosedProject from "./defaultPanel/dynamicSubPages/ChoosedProject/ChoosedProject";
import "animate.css/animate.min.css";

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
                    path: "/aspects",
                    element: <AspectsOfTheProject allAspects={true}/>
                },
                {
                    path: "/projects",
                    element: <OurProjects allProjects={true}/>
                },
                {
                    path: "/aspect/:id",
                    element: <ChoosedAspect/>
                },
                {
                    path: "/project/:id",
                    element: <ChoosedProject/>
                },
                {
                    path: "/details",
                    element: <Details/>
                },
                {
                    path: "/donat",
                    element: <Donat/>
                }
            ],
        },
        {
            path: "/error",
            element: <ErrorComponent/>
        },
    ], {basename: "/charitableFoundation"});
    return (
        <div className="App">
            <Provider store={store}>
                <RouterProvider router={router}/>
                <ToastContainer/>
            </Provider>
        </div>
    );
}

export default App;
