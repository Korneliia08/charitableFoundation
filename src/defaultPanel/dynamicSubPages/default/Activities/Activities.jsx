import style from "./Activities.module.css";
import CardOfActivity from "./CardOfActivity/CardOfActivity";
import ComponentMainButton from "../../../../components/ComponentMainButton/ComponentMainButton";
import {useSelector} from "react-redux";

const Activities = () => {
    const allActivities = useSelector(state => state.activities.activities);
    const activityCard = allActivities.slice(0, 9).map((activity, index) => <CardOfActivity data={activity}
                                                                                            key={index}/>);
    return (
        <div className={style.container} id="activities">
            <h2>ВИДИ ДІЯЛЬНОСТІ</h2>
            <div className={style.containerForActivities}>
                {activityCard}
            </div>
            <div className={style.blockForBtn}>
                <ComponentMainButton content="Усі  діяльності" color="#1265A8"/>
            </div>
        </div>
    )
}
export default Activities;
