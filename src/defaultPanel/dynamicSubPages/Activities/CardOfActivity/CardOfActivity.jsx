import style from "./CardOfActivity.module.css";
import {faArrowDown} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const CardOfActivity = () => {
    return (
        <div className={style.container}>
            <h4>Здійснення благодійної діяльності</h4>
            <p>В інтересах суспільства та окремій категорій осіб, надання благодійної допомоги</p>
            <FontAwesomeIcon icon={faArrowDown}/>
        </div>
    )
}
export default CardOfActivity;
