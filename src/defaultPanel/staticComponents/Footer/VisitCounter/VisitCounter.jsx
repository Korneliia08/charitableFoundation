import style from "./VisitCounter.module.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faUsers} from "@fortawesome/free-solid-svg-icons";
import {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import axios from "axios";
import {useTranslation} from "react-i18next";

const VisitCounter = () => {
    const navigate = useNavigate();
    const [t] = useTranslation();
    const [dataCounterOfVisits, setDataCounterOfVisits] = useState();

    function fetchData() {
        axios(import.meta.env.VITE_APP_LINKTOAPI + 'visits/stats').then(
            resp => {
                setDataCounterOfVisits(resp.data);
            }
        ).catch(error => {
            navigate('/error');
        });
    }

    useEffect(() => {
        fetchData();
        const timer = setInterval(() => {
            fetchData();

        }, 25000)
        return () => {
            clearInterval(timer);
        }
    }, []);
    if (!dataCounterOfVisits) {
        return "";
    }
    return (
        <div className={style.container}>
            <div className={style.blockForTitleAndIcon}>
                <h4>{t('translation:header.footer.NumberOfVisits.title')}:</h4>
                <FontAwesomeIcon icon={faUsers} className={style.icon}/>
            </div>
            <div className={style.blockForVisits}>
                <span>{t('translation:header.footer.NumberOfVisits.online')}: {dataCounterOfVisits.activeNow}</span>
                <span>{t('translation:header.footer.NumberOfVisits.today')}:{dataCounterOfVisits.totalToday}</span>
                <span>{t('translation:header.footer.NumberOfVisits.yesterday')}: {dataCounterOfVisits.yesterdayStats}</span>
                <span>{t('translation:header.footer.NumberOfVisits.thisWeek')}: {dataCounterOfVisits.thisWeekStats}</span>
                <span>{t('translation:header.footer.NumberOfVisits.thisMonth')}: {dataCounterOfVisits.thisMonthStats}</span>
                <span>{t('translation:header.footer.NumberOfVisits.thisYear')}: {dataCounterOfVisits.thisYearStats}</span>
                <span>{t('translation:header.footer.NumberOfVisits.all')}: {dataCounterOfVisits.totalStats}</span>
            </div>
        </div>
    )
}
export default VisitCounter;
