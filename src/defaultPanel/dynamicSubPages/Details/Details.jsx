import ArrowBack from "../../../components/ArrowBack/ArrowBack";
import {useNavigate} from "react-router-dom";
import style from "./Details.module.css";
import ComponentMainButton from "../../../components/ComponentMainButton/ComponentMainButton";
import ScrollToTop from "../../../components/scrollToTop";
import {useSelector} from "react-redux";
import Detail from "./Detail/Detail";

const Details = () => {
    const navigate = useNavigate();
    const data = useSelector(state => state.websiteDates.websiteDates?.detailSubPage);
    const allDetails = data?.details;

    function displayOneStepAgo() {
        navigate("/");
    }

    function displaySubPage() {
        navigate("/donat");
    }


    if (!allDetails) {
        return <h2>Loading....</h2>
    }
    const details = allDetails.map((detail, index) => <Detail data={detail} key={index}/>);

    return (
        <div className="containerForSubPage">
            <ScrollToTop/>
            <div className={style.mainContainer}>
                <h3>{data.title}</h3>
                <div className={style.containerForDetails}>
                    {details}
                </div>
                <div className={style.blockForButton}>
                    <ComponentMainButton content="Долучитися до збору" color="#FAC000" clickEvent={displaySubPage}/>
                </div>
            </div>
            <ArrowBack onClickEvent={displayOneStepAgo}/>
        </div>
    )
}
export default Details;
