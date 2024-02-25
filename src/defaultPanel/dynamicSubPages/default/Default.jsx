import AboutUs from "./AboutUs/AboutUs";
import DonationAndAdvice from "../../../components/DonationAndAdvice/DonationAndAdvice";
import AspectsOfTheProject from "./AspectsOfTheProject/AspectsOfTheProject";
import OurProjects from "./OurProjects/OurProjects";
import Advice from "./Advice/Advice";
import Map from "./Map/Map";
import Header from "../../staticComponents/Header/Header";
import {useNavigate} from "react-router-dom";

const DefaultPanel = () => {
    const navigate = useNavigate();

    function desplaySubPageDetails() {
        navigate("details");
    }

    return (
        <>
            <Header/>
            <AboutUs/>
            <DonationAndAdvice title="Консультація онлайн"/>
            <AspectsOfTheProject/>
            <DonationAndAdvice title="Зробити пожертвування" onClickEvent={desplaySubPageDetails}/>
            <OurProjects/>
            <Advice/>
            <Map/>
        </>
    )
}
export default DefaultPanel;
