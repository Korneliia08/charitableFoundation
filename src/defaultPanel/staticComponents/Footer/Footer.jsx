import style from "./Footer.module.css";
import Contacts from "./Contacts/Contacts";
import OpenHours from "./OpenHours/OpenHours";
import VisitCounter from "./VisitCounter/VisitCounter";
import QrCode from "./QrCode/QrCode";
import {useEffect, useState} from "react";
import LogoOfWebsite from "./LogoOfWebsite/LogoOfWebsite";
import {faUserTie} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const Footer = () => {
    const [year, setYear] = useState();

    useEffect(() => {
        const data = new Date();
        const year = data.getFullYear();
        setYear(year);
    }, []);

    function desplayAdminPanel() {
           window.location.href = "https://admin.powepeople.com";

    }

    return (
        <div className={style.container} id="footer">
            <div className={style.mainContainer}>
                <div className={style.blockForLogoAndContact}>
                    <Contacts/>
                    <LogoOfWebsite/>
                </div>
                <OpenHours/>
                <VisitCounter/>
                <QrCode/>
            </div>
            <div className={style.grayBelt}>
                <div>
                    <span> &copy; Всі права захищені {year} <a
                        href="https://t.me/korneliia0808">Веб-розробник:Корнелія Мушак</a></span>
                    <FontAwesomeIcon icon={faUserTie} className={style.adminIcon} onClick={desplayAdminPanel}/>
                </div>
            </div>
        </div>
    )
}
export default Footer;
