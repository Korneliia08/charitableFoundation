import style from "./Contacts.module.css";
import {faLocationDot, faPhone} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {useSelector} from "react-redux";
import {useTranslation} from "react-i18next";

const Contacts = () => {
    const data = useSelector(state => state.websiteDates.websiteDates.footer);
    const [t] = useTranslation();
    if (!data) {
        return "";
    }
    return (
        <div className={style.container}>
            <h4>{t('translation:header.footer.contacts.title')}:</h4>
            <div className={style.blockForContact}>
                <div className={style.contact}>
                    <FontAwesomeIcon icon={faLocationDot} className={style.icon}/>
                    <span>{data.adress}</span>
                </div>
                <div className={style.contact}>
                    <FontAwesomeIcon icon={faPhone} className={style.icon}/>
                    <span>
                       {data.contact}
                    </span>
                </div>
            </div>
        </div>
    )
}
export default Contacts;
