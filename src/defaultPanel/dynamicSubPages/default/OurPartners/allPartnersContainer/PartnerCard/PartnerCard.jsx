import style from "./PartnerCard.module.css";
import partner from "../../../../../../assets/images/partners/Mikajlov.png";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faHandshake} from "@fortawesome/free-solid-svg-icons";
import {useNavigate} from "react-router-dom";
import {useTranslation} from "react-i18next";

const PartnerCard = () => {
    const navigate = useNavigate();

    function displayPartner() {
        navigate('/partner/');
    }

    const [t] = useTranslation()
    const name = t('ourPartners.partners.0.name');
    const describe = t('ourPartners.partners.0.description');
    return (
        <div className={style.container} onClick={displayPartner}>
            <div className={style.blockUnderImage}>
                <img src={partner} alt="Mikajlov" className={style.imgStyle}/>
            </div>
            <div className={style.content}>
                <span className={style.name}>{name}</span>
                <span className={style.whichPartner}>{describe}</span>
            </div>
            <FontAwesomeIcon icon={faHandshake} className={style.iconHand}/>
        </div>
    )
}
export default PartnerCard;
