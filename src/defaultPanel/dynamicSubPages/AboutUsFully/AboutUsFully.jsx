import ArrowBack from "../../../components/ArrowBack/ArrowBack";
import aboutImage from "../../../assets/images/aboutUs.png";
import ContentAboutUsFully from "./ContentAboutUsFully/ContentAboutUsFully";
import style from "./AboutUsFully.module.css";
import {useNavigate} from "react-router-dom";

const AboutUsFully = () => {
    const navigate = useNavigate();

    function displaySubPage() {
        navigate("/");
    }

    return (
        <div className="containerForSubPage">
            <div className={style.container}>
                <ContentAboutUsFully/>
                <img src={aboutImage} alt="aboutUs"/>
            </div>
            <ArrowBack onClickEvent={displaySubPage}/>
        </div>
    )
}
export default AboutUsFully;
