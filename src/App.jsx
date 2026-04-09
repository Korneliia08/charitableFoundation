import './App.css';
import {Provider} from "react-redux";
import store from "./data/store";
import {ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import "animate.css/animate.min.css";
import {Router} from "./router.jsx";
import './assets/globalVariables.css';
import "swiper/css";
import "swiper/css/pagination";
import PopUp from "./defaultPanel/staticComponents/popup/popup.jsx";
import React from "react";

function App(props) {
    const [open, setOpen] = React.useState(true);
    return (

        <div className="App">

            <Provider store={store}>
                <Router/>
                <PopUp isOpen={open} onClose={() => setOpen(false)}/>
                <ToastContainer/>
            </Provider>
        </div>
    );
}


export default App
