import style from "./VisitCounter.module.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faUsers} from "@fortawesome/free-solid-svg-icons";

const VisitCounter = () => {
    return (
        <div className={style.container}>
            <div className={style.blockForTitleAndIcon}>
                <h4>Кількість відвідувань :</h4>
                <FontAwesomeIcon icon={faUsers} className={style.icon}/>
            </div>
            <div className={style.blockForVisits}>
                <span>Онлайн: 8</span>
                <span>Сьогодні: 10</span>
                <span>Учорай: 52</span>
                <span>Усього: 400</span>
            </div>
        </div>
    )
}
export default VisitCounter;
