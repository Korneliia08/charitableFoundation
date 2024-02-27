import AboutUs from "./AboutUs/AboutUs";
import DonationAndAdvice from "../../../components/DonationAndAdvice/DonationAndAdvice";
import AspectsOfTheProject from "./AspectsOfTheProject/AspectsOfTheProject";
import OurProjects from "./OurProjects/OurProjects";
import Advice from "./Advice/Advice";
import Map from "./Map/Map";
import Header from "../../staticComponents/Header/Header";
import {useNavigate} from "react-router-dom";
import {useRef, useState} from "react";
import {animateScroll as scroll} from 'react-scroll';

const DefaultPanel = () => {
    const navigate = useNavigate();
    const advice = useRef();
    const [topOfAdvice, setTopOfAdvice] = useState();

    function desplaySubPageDetails() {
        navigate("details");
    }

    function scrollToElement() {
        setTopOfAdvice(advice.current.offsetTop);
        scroll.scrollTo(topOfAdvice - 54, {
            duration: 1000,
            delay: 0,
            smooth: 'easeInOutQuart'
        });
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
            <Map/>
        </>
    )
}
export default DefaultPanel;
