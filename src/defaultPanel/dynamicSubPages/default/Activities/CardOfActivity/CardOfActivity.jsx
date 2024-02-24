import style from "./CardOfActivity.module.css";
import {faArrowDown} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {useNavigate} from "react-router-dom";

const CardOfActivity = (props) => {
    const navigate = useNavigate();
    const data = props.data;

    function displayChoosedActivity() {
        navigate('/activity/' + data.id);
    }

    return (
        <div className={style.container} onClick={displayChoosedActivity}>
            <h4>{data.title}</h4>
            <p>{data.content}</p>
            <FontAwesomeIcon icon={faArrowDown} className={style.icon}/>
        </div>
    )
}
export default CardOfActivity;
