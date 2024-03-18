import style from "./Donat.module.css";
import ArrowBack from "../../../components/ArrowBack/ArrowBack";
import {useNavigate} from "react-router-dom";
import ScrollToTop from "../../../components/scrollToTop";
import {useSelector} from "react-redux";

const Donat = () => {
    const navigate = useNavigate();
    const data = useSelector(state => state.websiteDates.websiteDates?.takeAdonat);
    if (!data) {
        return "";
    }

    function displayOneStepAgo() {
        navigate(-1);
    }

    return (
        <div className="containerForSubPage">
            <ScrollToTop/>
            <div className={style.mainContainer}>
                <div className={style.blockForTitleAndOther}>
                    <h4>БЛАГОДІЙНИЙ ФОНД - МОГУТНІСТЬ НАРОДУ</h4>
                    <div className={style.blockForImage}>
                        <img src={process.env.REACT_APP_LINKTOAPI + "files/" + data.imageId} role="presentation"
                             alt=""/>
                    </div>
                </div>
                <div className={style.blockForOnlineDonat}>
                    <h5>пожертвувати онлайн</h5>
                    <button>Долучитися до пожертвування</button>
                    <p dangerouslySetInnerHTML={{__html: data.description}}></p>
                </div>
            </div>
            <ArrowBack onClickEvent={displayOneStepAgo} className={style.arrow}/>
        </div>
    )
}
export default Donat;
