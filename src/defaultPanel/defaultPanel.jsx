import Header from "./staticComponents/Header/Header";
import Footer from "./staticComponents/Footer/Footer";
import AboutUs from "./dynamicSubPages/AboutUs/AboutUs";
import DonationAndAdvice from "../components/DonationAndAdvice/DonationAndAdvice";
import Activities from "./dynamicSubPages/Activities/Activities";

const defaultPanel = () => {
    return (
        <>
            <Header/>
            <AboutUs/>
            <DonationAndAdvice title="Консультація онлайн"/>
            <Activities/>
            <DonationAndAdvice title="Зробити пожертвування"/>
            <Footer/>
        </>
    )
}
export default defaultPanel;
