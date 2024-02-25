import style from "./AspectsOfTheProject.module.css";
import CardOfAspect from "./CardOfAspect/CardOfAspect";
import ComponentMainButton from "../../../../components/ComponentMainButton/ComponentMainButton";
import {useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";
import ArrowBack from "../../../../components/ArrowBack/ArrowBack";

const AspectsOfTheProject = (props) => {
    const navigate = useNavigate();
    const areAllAspects = props.allAspects;
    const allAspects = useSelector(state => state.aspects.aspects);
    let aspectCards = allAspects.map((aspect, index) => <CardOfAspect data={aspect}
                                                                      key={index}/>);

    if (!areAllAspects) {
        aspectCards = aspectCards.slice(0, 9);
    }

    function desplaySubPage() {
        navigate("/aspects")
    }

    function displayOneStepAgo() {
        navigate("/");
    }

    return (
        <div className={style.container} style={{paddingTop: areAllAspects ? "100px" : ""}}>
            {areAllAspects && <ArrowBack onClickEvent={displayOneStepAgo}/>}
            <h2>Проект забудови приватного будівництва, інвалідам та сім'ям загиблих воїнів.</h2>
            <p className={style.shortDescriptionUnderHeadline}>Створення будівельного проекту для воїнів інвалідів війни
                є дуже важливим завданням з метою забезпечення комфортного та доступного житла для цієї категорії людей.
                Цей проект повинен враховувати їх унікальні потреби та обмеження, забезпечуючи максимальний рівень
                зручностей та безпеки.

                <br/> Ось нижче кілька ключових аспектів, які слід врахувати при створенні будівельного проекту для
                воїнів
                інвалідів
                війни. Ці принципи можна використовувати для розробки інноваційних та дружніх до інвалідів будівельних
                проектів для воїнів інвалідів війни. Додатково важливо проводити консультації зі спеціалістами з
                інвалідності та ветеранами, щоб врахувати їхні потреби та пропозиції при розробці проекту.</p>
            <div className={style.containerForActivities}>
                {aspectCards}
            </div>
            <div className={style.blockForBtn} style={{display: !areAllAspects ? "" : "none"}}>
                {allAspects.length > 9 &&
                    <ComponentMainButton content="Усі аспекти" color="#1265A8" clickEvent={desplaySubPage}/>}
            </div>
        </div>
    )
}
export default AspectsOfTheProject;
