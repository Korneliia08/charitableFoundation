import {useParams} from "react-router-dom";
import style from "./ChoosedActivity.module.css";

const ChoosedActivity = (props) => {
    const {id} = useParams();
    return (
        <div className="containerForSubPage">
            <div className={style.container}></div>
        </div>
    )
}
export default ChoosedActivity;
