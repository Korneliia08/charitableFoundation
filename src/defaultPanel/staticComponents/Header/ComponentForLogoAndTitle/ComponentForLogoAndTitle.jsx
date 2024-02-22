import style from "./ComponentForLogoAndTitle.module.css";
import herb from "../../../../assets/images/herb.png";

const ComponentForLogoAndTitle = () => {

    return (
        <div className={style.container}>
            <img src={herb} alt="herb"/>
            <h1>Благодійний фонд - могутність народу</h1>
        </div>
    )
}
export default ComponentForLogoAndTitle;
