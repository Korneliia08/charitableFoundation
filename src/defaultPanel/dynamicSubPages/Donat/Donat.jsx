import style from "./Donat.module.css";
import ArrowBack from "../../../components/ArrowBack/ArrowBack";
import {useNavigate} from "react-router-dom";
import ScrollToTop from "../../../components/scrollToTop";
import {useSelector} from "react-redux";
import {useTranslation} from "react-i18next";

const Donat = () => {
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
                    <h4>{t('translation:donat.title')}</h4>
                    <img src={import.meta.env.VITE_APP_LINKTOAPI + "files/" + data.imageId} role="presentation"
                         alt=""/>
                </div>
                <div className={style.blockForOnlineDonat}>
                    <h5>{t('translation:donat.titleDonateOnline')}</h5>
                    <a style={{textDecoration: 'none'}} target={"_blank"} href={import.meta.env.VITE_APP_LINKTODONAT}>
                        <button style={{width: '100%'}}>{t('translation:allBtns.joinToDonation')}</button>
                    </a>
                    <p dangerouslySetInnerHTML={{__html: data.description}}></p>
                </div>
            </div>
            <ArrowBack onClickEvent={displayOneStepAgo} className={style.arrow}/>
        </div>
    )
}
export default Donat;
