import ArrowBack from "../../../components/ArrowBack/ArrowBack";
import ContentAboutUsFully from "./ContentAboutUsFully/ContentAboutUsFully";
import style from "./AboutUsFully.module.css";
import {useNavigate} from "react-router-dom";
import ScrollToTop from "../../../components/scrollToTop";
import {useSelector} from "react-redux";

const AboutUsFully = () => {
    const navigate = useNavigate();
    const data = useSelector(state => state.websiteDates.websiteDates?.aboutUs);
    if (!data) {
        return "";
    }

    function displayOneStepAgo() {
        navigate(-1);
    }

    return (
        <div className="containerForSubPage">
            <ScrollToTop/>
            <div className={style.container}>
                <ContentAboutUsFully/>
                <img src={import.meta.env.VITE_APP_LINKTOAPI + "files/" + data.imgId} role="presentation" alt=""/>
            </div>
            <ArrowBack className={style.arrow} onClickEvent={displayOneStepAgo}/>
        </div>
    )
}
export default AboutUsFully;

