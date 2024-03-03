import style from "./VisitCounter.module.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faUsers} from "@fortawesome/free-solid-svg-icons";
import {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import axios from "axios";

const VisitCounter = () => {
    const navigate = useNavigate();
    const [dataCounterOfVisits, setDataCounterOfVisits] = useState();

    function fetchData() {
        axios(process.env.REACT_APP_LINKTOAPI + '/visits/stats').then(
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
        return <h4>Loading....</h4>
    }
    return (
        <div className={style.container}>
            <div className={style.blockForTitleAndIcon}>
                <h4>Кількість відвідувань :</h4>
                <FontAwesomeIcon icon={faUsers} className={style.icon}/>
            </div>
            <div className={style.blockForVisits}>
                <span>Онлайн: {dataCounterOfVisits.activeNow}</span>
                <span>Сьогодні:{dataCounterOfVisits.totalToday}</span>
                <span>Учорай: {dataCounterOfVisits.yesterdayStats}</span>
                <span>Цього тижня: {dataCounterOfVisits.thisWeekStats}</span>
                <span>Цього місяця: {dataCounterOfVisits.thisMonthStats}</span>
                <span>Цього року: {dataCounterOfVisits.thisYearStats}</span>
                <span>Усього: {dataCounterOfVisits.totalStats}</span>
            </div>
        </div>
    )
}
export default VisitCounter;
