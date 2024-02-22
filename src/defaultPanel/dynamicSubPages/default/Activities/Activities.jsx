import style from "./Activities.module.css";
import CardOfActivity from "./CardOfActivity/CardOfActivity";

const Activities = () => {
    return (
        <div className={style.container}>
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
        </div>
    )
}
export default Activities;
