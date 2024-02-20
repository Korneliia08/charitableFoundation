import './App.css';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import DefaultPanel from "./defaultPanel/defaultPanel";
import {Provider} from "react-redux";
import store from "./data/store";

function App() {
    const router = createBrowserRouter([
        {
            path: "/",
            element: <DefaultPanel/>
        },
    ]);
    return (
        <div className="App">
            <Provider store={store}>
                <RouterProvider router={router}/>
            </Provider>
        </div>
    );
}

export default App;
