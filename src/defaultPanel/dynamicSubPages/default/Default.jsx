import AboutUs from "./AboutUs/AboutUs";
import DonationAndAdvice from "../../../components/DonationAndAdvice/DonationAndAdvice";
import Activities from "./Activities/Activities";
import OurProjects from "./OurProjects/OurProjects";
import Advice from "./Advice/Advice";
import Map from "./Map/Map";
import Header from "../../staticComponents/Header/Header";

const defaultPanel = () => {
    return (
        <>
            <Header/>
            <AboutUs/>
            <DonationAndAdvice title="Консультація онлайн"/>
            <Activities/>
            <DonationAndAdvice title="Зробити пожертвування"/>
            <OurProjects/>
            <Advice/>
            <Map/>
        </>
    )
}
export default defaultPanel;
