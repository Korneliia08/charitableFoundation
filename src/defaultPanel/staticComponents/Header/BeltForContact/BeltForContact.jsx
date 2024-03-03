import style from "./BeltForContact.module.css";
import {faPhone} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const BeltForContact = (props) => {
    const data = props.data;

    return (
        <div className={style.container}>
            <div className={style.blockForContact}>
                <FontAwesomeIcon icon={faPhone} className={style.iconPhone}/>

                <a href={"tel:" + data.contact.replace('+', '').replaceAll("  ", '').replaceAll(" ", '')}
                   className={style.tegForContact}>{data.contact}</a>

            </div>
        </div>
    )
}
export default BeltForContact;
