import style from "./DepartmentCommunications.module.css";
import ArrowBack from "../../../components/ArrowBack/ArrowBack";
import {useNavigate} from "react-router-dom";
import ScrollToTop from "../../../components/scrollToTop";
import {useSelector} from "react-redux";
import {useTranslation} from "react-i18next";

const DepartmentCommunications = () => {
    const navigate = useNavigate();
    const data = useSelector(state => state.websiteDates.websiteDates?.takeAdonat);
    const [t] = useTranslation();
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
                    <h4>testsetset</h4>
                    <img src={import.meta.env.VITE_APP_LINKTOAPI + "files/" + data.imageId} role="presentation"
                         alt=""/>
                </div>
                <div className={style.blockForOnlineDonat}>

                    sets
                </div>
            </div>
            <ArrowBack onClickEvent={displayOneStepAgo} className={style.arrow}/>
        </div>
    )
}
export default DepartmentCommunications;
