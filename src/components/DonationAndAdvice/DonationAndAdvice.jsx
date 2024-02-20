import style from "./DonationAndAdvice.module.css";
import ComponentMainButton from "../ComponentMainButton/ComponentMainButton";

const DonationAndAdvice = (props) => {
    const title = props.title;
    return (
        <div className={style.container}>
            <h3>{title}</h3>
            <ComponentMainButton content="Детальніше" color="#FFD801"/>
        </div>
    )
}
export default DonationAndAdvice;
