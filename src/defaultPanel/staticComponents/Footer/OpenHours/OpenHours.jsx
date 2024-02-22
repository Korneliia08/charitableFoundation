import style from "./OpenHours.module.css";
import {faClock} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const OpenHours = () => {
    return (
        <div className={style.container}>
            <div className={style.blockForTitleAndIcon}>
                <h4>Графік роботи:</h4>
                <FontAwesomeIcon icon={faClock} className={style.icon}/>
            </div>
            <div className={style.blockForOpeningHours}>
                <span>Понеділок: 08:00-18:00</span>
                <span>Вівторок: 08:00-18:00</span>
                <span>Середа: 08:00-18:00</span>
                <span>Четвер: 08:00-18:00</span>
                <span>П’ятниця: 08:00-18:00</span>
                <span>Субота - зачинено</span>
                <span>Неділя - зачинено</span>
            </div>
        </div>
    )
}
export default OpenHours;
