import style from "./LogoOfWebsite.module.css";
import imgLogo from "../../../../assets/images/herb.png";

const LogoOfWebsite = () => {
    return (
        <div className={style.container}>
            <img src={imgLogo} alt="logo"/>
            <h4>Благодійний фонд - майбутність народу</h4>
        </div>
    )
}
export default LogoOfWebsite;
