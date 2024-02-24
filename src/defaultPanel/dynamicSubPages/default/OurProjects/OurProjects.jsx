import style from "./OurProjects.module.css";
import CardOfProject from "./CardOfProject/CardOfProject";
import ComponentMainButton from "../../../../components/ComponentMainButton/ComponentMainButton";
import {useNavigate} from "react-router-dom";
import ArrowBack from "../../../../components/ArrowBack/ArrowBack";

const OurProjects = (props) => {
    const navigate = useNavigate();
    const areAllProjects = props.allProjects;

    function desplaySubPage() {
        navigate("/projects");
    }

    function displayOneStepAgo() {
        navigate("/");
    }

    return (
        <div className={style.container} id="ourProjects" style={{paddingTop: areAllProjects ? "100px" : ""}}>
            {areAllProjects && <ArrowBack onClickEvent={displayOneStepAgo}/>}
            <h2>Наші проекти</h2>
            <div className={style.containerForCards}>
                <CardOfProject title="Проект допомоги Збройним Силам України"/>
                <CardOfProject title="Проект відновлення зруйнованого житла та інфраструктури"/>
                <CardOfProject title="Проект поліпшення медичного обслуговування"/>
            </div>
            <div className={style.blockForBtn} style={{display: !areAllProjects ? "" : "none"}}>
                <ComponentMainButton content="Усі проекти" color="#FFD801" clickEvent={desplaySubPage}/>
            </div>
        </div>
    )
}
export default OurProjects;
