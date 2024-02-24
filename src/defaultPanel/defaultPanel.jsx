import Footer from "./staticComponents/Footer/Footer";
import ArrowToTop from "../components/ArrowToTop/ArrowToTop";
import {Outlet} from "react-router-dom";
import BeltForContact from "./staticComponents/Header/BeltForContact/BeltForContact";
import BlockForLogoAndNav from "./staticComponents/Header/BlockForLogoAndNav/BlockForLogoAndNav";
import {useEffect, useState} from "react";
import {useDispatch} from "react-redux";
import axios from "axios";
import {setActivities} from "../data/reducers/activityReducer";


const DefaultPanel = () => {

    const [belt, setBelt] = useState(true);

    function checkY() {

        if (window.pageYOffset > 15) {
            setBelt(false);
            return;
        }
        setBelt(true);

    }

    const dispatch = useDispatch();
    useEffect(() => {
        axios('http://10.68.6.106:3000/activities').then(
            resp => {
                dispatch(setActivities(resp.data));
            }
        )
    }, []);

    useEffect(() => {
        document.addEventListener("scroll", checkY);
        return () => {
            document.removeEventListener("scroll", checkY);
        }
    }, []);

    return (
        <div className="flexibleBlock">
            <BeltForContact/>
            <BlockForLogoAndNav belt={belt}/>
            <Outlet/>
            <Footer/>
            <ArrowToTop/>
        </div>
    )
}
export default DefaultPanel;
