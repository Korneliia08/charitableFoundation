import style from "./BeltForContact.module.css";
import {faLanguage, faPhone} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import ukrainianHeart from "../../../../assets/images/heartUkrainian.png";
import {useTranslation} from 'react-i18next';
import ContainerForLanguages from "./containerForLanguages/ContainerForLanguages.jsx";
import {useState} from "react";

const BeltForContact = (props) => {
    const data = props.data;
    const {t} = useTranslation();
    const [openAllLanguages, setOpenAllLanguages] = useState(false);

    function displayLanguages() {
        setOpenAllLanguages(!openAllLanguages);
    }

    return (
        <div className={style.container}>
            <div className={style.blockForContact}>
                <FontAwesomeIcon icon={faPhone} className={style.iconPhone}/>
                <a href={"tel:" + data.contact.replace('+', '').replaceAll("  ", '').replaceAll(" ", '')}
                   className={style.tegForContact}>{data.contact}</a>
            </div>
            <div className={style.blockForIconLanguage}><FontAwesomeIcon icon={faLanguage} className={style.icon}
                                                                         onClick={displayLanguages}/>
                <ContainerForLanguages isVisibly={openAllLanguages}/>
            </div>
            <div className={style.blockForHeart}>
                <img src={ukrainianHeart} role="presentation" alt="" className={style.ukrainianHeartImage}/>
                <span>{t('translation:header.belt.rightTitle')}</span>
            </div>
        </div>
    )
}
export default BeltForContact;
