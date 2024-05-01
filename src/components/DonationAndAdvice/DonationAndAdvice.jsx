import style from "./DonationAndAdvice.module.css";
import ComponentMainButton from "../ComponentMainButton/ComponentMainButton";
import {useSelector} from "react-redux";
import {useTranslation} from "react-i18next";

const DonationAndAdvice = (props) => {
    const imageId = useSelector(state => state.websiteDates.websiteDates.advice?.imageId);
    const [t] = useTranslation();
    const whichFunction = props.onClickEvent;
    const title = props.title;

    if (!imageId) {
        return "";
    }
    return (
        <div className={style.container} onClick={whichFunction}
             style={{backgroundImage: `url(${import.meta.env.VITE_APP_LINKTOAPI + "files/" + imageId})`}}>
            <h3>{title}</h3>
            <ComponentMainButton content={t('translation:allBtns.moreDetails')} color="#FFD801"
                                 clickEvent={whichFunction}
                                 styleClass={style.mainBtn}/>
        </div>
    )
}
export default DonationAndAdvice;
