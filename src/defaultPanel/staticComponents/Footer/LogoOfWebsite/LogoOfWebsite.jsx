import style from "./LogoOfWebsite.module.css";
import imgLogo from "../../../../assets/images/herb.png";
import {useSelector} from "react-redux";

const LogoOfWebsite = () => {
    const data = useSelector(state => state.websiteDates.websiteDates.footer);
    if (!data) {
        return "";
    }
    return (
        <div className={style.container}>
            <img src={imgLogo} role="presentation" alt=""/>
            <h4>{data.titleOfFoundation}</h4>
        </div>
    )
}
export default LogoOfWebsite;
