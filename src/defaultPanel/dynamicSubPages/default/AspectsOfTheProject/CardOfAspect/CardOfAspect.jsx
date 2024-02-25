import style from "./CardOfAspect.module.css";
import {faArrowDown} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {useNavigate} from "react-router-dom";

const CardOfAspect = (props) => {
    const navigate = useNavigate();
    const data = props.data;

    function displayChoosedAspect() {
        navigate('/aspect/' + data.id);
    }

    return (
        <div className={style.container} onClick={displayChoosedAspect}>
            <h4>{data.title}</h4>
            <p>{data.content}</p>
            <FontAwesomeIcon icon={faArrowDown} className={style.icon}/>
        </div>
    )
}
export default CardOfAspect;
