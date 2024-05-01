import './App.css';
import {Provider} from "react-redux";
import store from "./data/store";
import {ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import "animate.css/animate.min.css";
import {Router} from "./router.jsx";
import './assets/globalVariables.css';
import {useEffect} from "react";
import {useTranslation} from "react-i18next";
function App(props) {
    const [t, i18n] = useTranslation()
    useEffect(() => {

    }, []);
    return (

        <div className="App">

            <Provider store={store}>
                <Router/>
                <ToastContainer/>
            </Provider>
        </div>
    );
}


export default App
