import style from "./DonationAndAdvice.module.css";
import ComponentMainButton from "../ComponentMainButton/ComponentMainButton";
import {AnimationOnScroll} from "react-animation-on-scroll";

const DonationAndAdvice = (props) => {
    const title = props.title;
    const whichFunction = props.onClickEvent;
    return (
        <div className={style.container}>
            <AnimationOnScroll animateIn="animate__backInLeft">
                <h3>{title}</h3>
            </AnimationOnScroll>
            <ComponentMainButton content="Детальніше" color="#FFD801" clickEvent={whichFunction}/>
        </div>
    )
}
export default DonationAndAdvice;
