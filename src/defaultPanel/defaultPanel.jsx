import Footer from "./staticComponents/Footer/Footer";
import ArrowToTop from "../components/ArrowToTop/ArrowToTop";
import {Outlet} from "react-router-dom";
import BeltForContact from "./staticComponents/Header/BeltForContact/BeltForContact";
import BlockForLogoAndNav from "./staticComponents/Header/BlockForLogoAndNav/BlockForLogoAndNav";
import {useEffect, useState} from "react";


const DefaultPanel = () => {

    const [belt, setBelt] = useState(true);

    function checkY() {

        if (window.pageYOffset > 15) {
            setBelt(false);
            return;
        }
        setBelt(true);

    }

    useEffect(() => {
        document.addEventListener("scroll", checkY);
        return () => {
            document.removeEventListener("scroll", checkY);
        }
    }, []);

    return (
        <>
            <BeltForContact/>
            <BlockForLogoAndNav belt={belt}/>
            <Outlet/>
            <Footer/>
            <ArrowToTop/>
        </>
    )
}
export default DefaultPanel;
