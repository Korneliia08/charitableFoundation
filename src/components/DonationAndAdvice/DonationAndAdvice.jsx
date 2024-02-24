import style from "./DonationAndAdvice.module.css";
import ComponentMainButton from "../ComponentMainButton/ComponentMainButton";

const DonationAndAdvice = (props) => {
    const title = props.title;
    const whichFunction = props.onClickEvent;
    return (
        <div className={style.container}>
            <h3>{title}</h3>
            <ComponentMainButton content="Детальніше" color="#FFD801" clickEvent={whichFunction}/>
        </div>
    )
}
export default DonationAndAdvice;
