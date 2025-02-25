import style from "./PartnerCard.module.css";
import partner from "../../../../../../assets/images/partners/Mikajlov.png";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faHandshake} from "@fortawesome/free-solid-svg-icons";
import {useNavigate} from "react-router-dom";

const PartnerCard = () => {
    const navigate = useNavigate();

    function displayPartner() {
        navigate('/partner/');
    }

    const name = "Мікайлов Нізамі Вели огли";
    const describe = "представник фонду по Південно-Західній Азії";
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
