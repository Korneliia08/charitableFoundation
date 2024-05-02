import style from "./OpenHours.module.css";
import {faClock} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {useSelector} from "react-redux";
import {useTranslation} from "react-i18next";

const OpenHours = () => {
    const data = useSelector(state => state.websiteDates.websiteDates?.footer?.workShedule);
    const [t] = useTranslation();
    if (!data) {
        return "";
    }
    return (
        <div className={style.container}>
            <div className={style.blockForTitleAndIcon}>
                <h4>{t('translation:header.footer.WorkingHoursSchedule.title')}:</h4>
                <FontAwesomeIcon icon={faClock} className={style.icon}/>
            </div>
            <div className={style.blockForOpeningHours}>
                <span>{t('translation:header.footer.WorkingHoursSchedule.monday')}: {data.monday.isOpen ? `${data.monday.open}-${data.monday.close}` : t('translation:header.footer.WorkingHoursSchedule.closed')}</span>
                <span>{t('translation:header.footer.WorkingHoursSchedule.tuesday')}: {data.tuesday.isOpen ? `${data.tuesday.open}-${data.tuesday.close}` : t('translation:header.footer.WorkingHoursSchedule.closed')}</span>
                <span>{t('translation:header.footer.WorkingHoursSchedule.wednesday')}: {data.wednesday.isOpen ? `${data.wednesday.open}-${data.wednesday.close}` : t('translation:header.footer.WorkingHoursSchedule.closed')}</span>
                <span>{t('translation:header.footer.WorkingHoursSchedule.thursday')}: {data.thursday.isOpen ? `${data.thursday.open}-${data.thursday.close}` : t('translation:header.footer.WorkingHoursSchedule.closed')}</span>
                <span>{t('translation:header.footer.WorkingHoursSchedule.friday')}: {data.friday.isOpen ? `${data.friday.open}-${data.friday.close}` : t('translation:header.footer.WorkingHoursSchedule.closed')}</span>
                <span>{t('translation:header.footer.WorkingHoursSchedule.Saturday')}: {data.saturday.isOpen ? `${data.saturday.open}-${data.saturday.close}` : t('translation:header.footer.WorkingHoursSchedule.closed')}</span>
                <span>{t('translation:header.footer.WorkingHoursSchedule.Sunday')}: {data.sunday.isOpen ? `${data.sunday.open}-${data.sunday.close}` : t('translation:header.footer.WorkingHoursSchedule.closed')}</span>
            </div>
        </div>
    )
}
export default OpenHours;
