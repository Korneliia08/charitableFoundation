import style from "./OpenHours.module.css";
import {faClock} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {useSelector} from "react-redux";

const OpenHours = () => {
    const data = useSelector(state => state.websiteDates.websiteDates?.footer?.workShedule);
    if (!data) {
        return <h4>Loading....</h4>
    }
    return (
        <div className={style.container}>
            <div className={style.blockForTitleAndIcon}>
                <h4>Графік роботи:</h4>
                <FontAwesomeIcon icon={faClock} className={style.icon}/>
            </div>
            <div className={style.blockForOpeningHours}>
                <span>Понеділок: {data.monday.isOpen ? `${data.monday.open}-${data.monday.close}` : 'зачинено'}</span>
                <span>Вівторок: {data.tuesday.isOpen ? `${data.tuesday.open}-${data.tuesday.close}` : 'зачинено'}</span>
                <span>Середа: {data.wednesday.isOpen ? `${data.wednesday.open}-${data.wednesday.close}` : 'зачинено'}</span>
                <span>Четвер: {data.thursday.isOpen ? `${data.thursday.open}-${data.thursday.close}` : 'зачинено'}</span>
                <span>П’ятниця: {data.friday.isOpen ? `${data.friday.open}-${data.friday.close}` : 'зачинено'}</span>
                <span>Субота: {data.saturday.isOpen ? `${data.saturday.open}-${data.saturday.close}` : 'зачинено'}</span>
                <span>Неділя: {data.sunday.isOpen ? `${data.sunday.open}-${data.sunday.close}` : 'зачинено'}</span>
            </div>
        </div>
    )
}
export default OpenHours;
