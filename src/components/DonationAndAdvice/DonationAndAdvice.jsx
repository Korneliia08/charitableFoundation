import style from "./DonationAndAdvice.module.css";
import ComponentMainButton from "../ComponentMainButton/ComponentMainButton";
import {useSelector} from "react-redux";

const DonationAndAdvice = (props) => {
    const imageId = useSelector(state => state.websiteDates.websiteDates.advice?.imageId);
    if (!imageId) {
        return "";
    }
    const title = props.title;
    const whichFunction = props.onClickEvent;
    return (
        <div className={style.container} onClick={whichFunction}
             style={{backgroundImage: `url(${import.meta.env.VITE_APP_LINKTOAPI + "files/" + imageId})`}}>
            <h3>{title}</h3>
            <ComponentMainButton content="Детальніше" color="#FFD801" clickEvent={whichFunction}
                                 styleClass={style.mainBtn}/>
        </div>
    )
}
export default DonationAndAdvice;
