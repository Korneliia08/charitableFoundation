import ArrowBack from "../../../components/ArrowBack/ArrowBack";
import {useNavigate} from "react-router-dom";
import Detail from "./Detail/Detail";
import style from "./Details.module.css";
import ComponentMainButton from "../../../components/ComponentMainButton/ComponentMainButton";
import ScrollToTop from "../../../components/scrollToTop";

const Details = () => {
    const navigate = useNavigate();

    function displayOneStepAgo() {
        navigate("/");
    }

    return (
        <div className="containerForSubPage">
            <ScrollToTop/>
            <div className={style.mainContainer}>
                <h3>РЕКВІЗИТИ ДЛЯ ПОЖЕРТВИ</h3>
                <div className={style.containerForDetails}>
                    <Detail></Detail>
                    <Detail></Detail>
                    <Detail></Detail>
                </div>
                <div className={style.blockForButton}>
                    <ComponentMainButton content="Долучитися до збору" color="#FAC000"/>
                </div>
            </div>
            <ArrowBack onClickEvent={displayOneStepAgo}/>
        </div>
    )
}
export default Details;
