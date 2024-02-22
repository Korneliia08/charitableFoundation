import style from "./Footer.module.css";
import Contacts from "./Contacts/Contacts";
import OpenHours from "./OpenHours/OpenHours";
import VisitCounter from "./VisitCounter/VisitCounter";
import QrCode from "./QrCode/QrCode";

const Footer = () => {
    return (
        <div className={style.container}>
            <div>
                <Contacts/>
                <OpenHours/>
                <VisitCounter/>
                <QrCode/>
            </div>
        </div>
    )
}
export default Footer;
