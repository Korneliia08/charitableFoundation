import style from "./Activities.module.css";
import CardOfActivity from "./CardOfActivity/CardOfActivity";
import ComponentMainButton from "../../../../components/ComponentMainButton/ComponentMainButton";
import {useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";
import ArrowBack from "../../../../components/ArrowBack/ArrowBack";

const Activities = (props) => {
    const navigate = useNavigate();
    const areAllActivities = props.allActivities;
    const allActivities = useSelector(state => state.activities.activities);
    let activityCards = allActivities.map((activity, index) => <CardOfActivity data={activity}
                                                                               key={index}/>);

    if (!areAllActivities) {
        activityCards = activityCards.slice(0, 9);
    }

    function desplaySubPage() {
        navigate("/activities")
    }

    function displayOneStepAgo() {
        navigate("/");
    }

    return (
        <div className={style.container} style={{paddingTop: areAllActivities ? "100px" : ""}}>
            {areAllActivities && <ArrowBack onClickEvent={displayOneStepAgo}/>}
            <h2>Проект забудови приватного будівництва, інвалідам та сім'ям загиблих воїнів.</h2>
            <p className={style.shortDescriptionUnderHeadline}>Створення будівельного проекту для воїнів інвалідів війни
                є дуже важливим завданням з метою забезпечення комфортного та доступного житла для цієї категорії людей.
                Цей проект повинен враховувати їх унікальні потреби та обмеження, забезпечуючи максимальний рівень
                зручностей та безпеки.

                Ось кілька ключових аспектів, які слід врахувати при створенні будівельного проекту для воїнів інвалідів
                війни:</p>
            <div className={style.containerForActivities}>
                {activityCards}
            </div>
            <div className={style.blockForBtn} style={{display: !areAllActivities ? "" : "none"}}>
                {allActivities.length > 9 &&
                    <ComponentMainButton content="Усі аспекти" color="#1265A8" clickEvent={desplaySubPage}/>}
            </div>
        </div>
    )
}
export default Activities;
