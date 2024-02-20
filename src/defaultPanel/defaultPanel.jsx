import Header from "./staticComponents/Header/Header";
import Footer from "./staticComponents/Footer/Footer";
import AboutUs from "./dynamicSubPages/AboutUs/AboutUs";
import DonationAndAdvice from "../components/DonationAndAdvice/DonationAndAdvice";
import Activities from "./dynamicSubPages/Activities/Activities";
import OurProjects from "./dynamicSubPages/OurProjects/OurProjects";
import Advice from "./dynamicSubPages/Advice/Advice";
import Map from "./dynamicSubPages/Map/Map";

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
            <Footer/>
        </>
    )
}
export default defaultPanel;
