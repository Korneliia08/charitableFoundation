import style from "./Activities.module.css";
import CardOfActivity from "./CardOfActivity/CardOfActivity";
import ComponentMainButton from "../../../../components/ComponentMainButton/ComponentMainButton";

const Activities = () => {
    return (
        <div className={style.container} id="activities">
            <h2>ВИДИ ДІЯЛЬНОСТІ</h2>
            <div className={style.containerForActivities}>
                <CardOfActivity/>
                <CardOfActivity/>
                <CardOfActivity/>
                <CardOfActivity/>
                <CardOfActivity/>
                <CardOfActivity/>
                <CardOfActivity/>
                <CardOfActivity/>
                <CardOfActivity/>
            </div>
            <div className={style.blockForBtn}>
                <ComponentMainButton content="Усі  діяльності" color="#1265A8"/>
            </div>
        </div>
    )
}
export default Activities;
