import style from "./ArrowBack.module.css";
import {faCircleArrowLeft} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const ArrowBack = (props) => {
    return (
        <button className={`${style.container} ${props.className}`} onClick={props.onClickEvent}
                style={{top: props.top}}>
            <FontAwesomeIcon icon={faCircleArrowLeft}/>
        </button>
    )
}
export default ArrowBack;
