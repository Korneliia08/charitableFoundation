import style from "./Contacts.module.css";
import {faLocationDot, faPhone} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const Contacts = () => {
    return (
        <div className={style.container}>
            <h4>Контакти:</h4>
            <div className={style.blockForContact}>
                <div className={style.contact}>
                    <FontAwesomeIcon icon={faLocationDot} className={style.icon}/>
                    <span>м.Київ,Ізюмська,7</span>
                </div>
                <div className={style.contact}>
                    <FontAwesomeIcon icon={faPhone} className={style.icon}/>
                    <span>
                        +38 (063) 883 ** **
                    </span>
                </div>
            </div>
        </div>
    )
}
export default Contacts;
