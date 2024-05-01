import './App.css';
import {Provider} from "react-redux";
import store from "./data/store";
import {ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import "animate.css/animate.min.css";
import {Router} from "./router.jsx";
import './assets/globalVariables.css';

function App(props) {

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
