import AboutUs from "./AboutUs/AboutUs";
import DonationAndAdvice from "../../../components/DonationAndAdvice/DonationAndAdvice";
import AspectsOfTheProject from "./AspectsOfTheProject/AspectsOfTheProject";
import OurProjects from "./OurProjects/OurProjects";
import Advice from "./Advice/Advice";

import Header from "../../staticComponents/Header/Header";
import {useNavigate} from "react-router-dom";
import {lazy, useEffect, useRef, useState} from "react";
import {animateScroll as scroll} from 'react-scroll';


const DefaultPanel = (props) => {
    const navigate = useNavigate();
    const advice = useRef();
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
    }, []);
    function desplaySubPageDetails() {
        navigate("/details");
    }

    function scrollToElement() {
        //setTopOfAdvice(advice.current.offsetTop);

        scroll.scrollTo(advice.current.offsetTop - 54, {
            duration: 1000,
            delay: 0,
            smooth: 'easeInOutQuart'
        });
    }
    let map = ''
    if(isClient){
     map = lazy(() => import('./Map/Map.jsx'));
    }
    return (
        <>

            <Header/>
            <AboutUs/>
            <DonationAndAdvice title="Консультація онлайн" onClickEvent={scrollToElement}/>
            <AspectsOfTheProject/>
            <DonationAndAdvice title="Зробити пожертвування" onClickEvent={desplaySubPageDetails}/>
            <OurProjects/>
            <Advice advice={advice}/>
            {  isClient ?<map/>:''}
        </>
    )
}
export default DefaultPanel;
