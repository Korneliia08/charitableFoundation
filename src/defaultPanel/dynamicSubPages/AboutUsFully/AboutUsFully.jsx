import ArrowBack from "../../../components/ArrowBack/ArrowBack";
import aboutImage from "../../../assets/images/aboutUs.png";
import ContentAboutUsFully from "./ContentAboutUsFully/ContentAboutUsFully";
import style from "./AboutUsFully.module.css";
import {useNavigate} from "react-router-dom";
import ScrollToTop from "../../../components/scrollToTop";

const AboutUsFully = () => {
    const navigate = useNavigate();

    function displayOneStepAgo() {
        navigate("/");
    }

    return (
        <div className="containerForSubPage">
            <ScrollToTop/>
            <div className={style.container}>
                <ContentAboutUsFully/>
                <img src={aboutImage} alt="aboutUs"/>
            </div>
            <ArrowBack onClickEvent={displayOneStepAgo}/>
        </div>
    )
}
export default AboutUsFully;
