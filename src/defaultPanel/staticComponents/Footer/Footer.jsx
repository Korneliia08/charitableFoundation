import style from "./Footer.module.css";
import Contacts from "./Contacts/Contacts";
import OpenHours from "./OpenHours/OpenHours";
import VisitCounter from "./VisitCounter/VisitCounter";
import QrCode from "./QrCode/QrCode";
import {useEffect, useState} from "react";

const Footer = () => {
    const [year, setYear] = useState();

    useEffect(() => {
        const data = new Date();
        const year = data.getFullYear();
        setYear(year);
    }, []);
    return (
        <div className={style.container}>
            <div className={style.mainContainer}>
                <Contacts/>
                <OpenHours/>
                <VisitCounter/>
                <QrCode/>
            </div>
            <div className={style.grayBelt}>
                <span> &copy; Всі права захищені {year}</span>
            </div>
        </div>
    )
}
export default Footer;
