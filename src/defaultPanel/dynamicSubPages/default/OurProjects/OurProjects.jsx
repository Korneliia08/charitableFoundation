import style from "./OurProjects.module.css";
import CardOfProject from "./CardOfProject/CardOfProject";

const OurProjects = () => {
    return (
        <div className={style.container} id="ourProjects">
            <h2>Наші проекти</h2>
            <div className={style.containerForCards}>
                <CardOfProject title="Проект допомоги Збройним Силам України"/>
                <CardOfProject title="Проект відновлення зруйнованого житла та інфраструктури"/>
                <CardOfProject title="Проект поліпшення медичного обслуговування"/>
            </div>
        </div>
    )
}
export default OurProjects;
