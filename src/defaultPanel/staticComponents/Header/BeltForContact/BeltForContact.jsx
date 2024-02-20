import style from "./BeltForContact.module.css";
import {faPhone} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const BeltForContact = () => {
    return (
        <div className={style.container}>
            <div className={style.blockForContact}>
                <FontAwesomeIcon icon={faPhone} className={style.iconPhone}/>
                <span className={style.spanForContact}> +38 (096) 267 ** **</span>
            </div>
        </div>
    )
}
export default BeltForContact;
