import style from "./BeltForContact.module.css";
import {faPhone} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import ukrainianHeart from "../../../../assets/images/heartUkrainian.png";
import {useTranslation} from 'react-i18next';

const BeltForContact = (props) => {
    const data = props.data;
    const {t} = useTranslation();
    return (
        <div className={style.container}>
            <div className={style.blockForContact}>
                <FontAwesomeIcon icon={faPhone} className={style.iconPhone}/>
                <a href={"tel:" + data.contact.replace('+', '').replaceAll("  ", '').replaceAll(" ", '')}
                   className={style.tegForContact}>{data.contact}</a>
            </div>
            <div className={style.blockForHeart}>
                <img src={ukrainianHeart} role="presentation" alt="" className={style.ukrainianHeartImage}/>
                <span>{t('nav.belt.rightTitle')}</span>
            </div>
        </div>
    )
}
export default BeltForContact;
