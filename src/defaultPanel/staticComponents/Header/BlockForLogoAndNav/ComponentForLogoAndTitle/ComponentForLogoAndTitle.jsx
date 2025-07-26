import style from "./ComponentForLogoAndTitle.module.css";
import herb from "../../../../../assets/images/herb.png";
import {useSelector} from "react-redux";
import {NavLink} from "react-router-dom";

const ComponentForLogoAndTitle = (props) => {
    const title = useSelector(state => state.websiteDates.websiteDates?.header?.titleOfWebsite);
    if (!title) {
        return "";
    }
    return (
        <NavLink to={"/"} className={`${style.container} ${props.belt ? '' : style.min}`}>
            <img src={herb} alt="herb"/>
            <h1>{title}</h1>
        </NavLink>
    )
}
export default ComponentForLogoAndTitle;
