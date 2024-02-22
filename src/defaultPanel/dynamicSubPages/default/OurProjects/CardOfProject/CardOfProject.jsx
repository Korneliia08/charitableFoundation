import style from "./CardOfProject.module.css";
import ComponentMainButton from "../../../../../components/ComponentMainButton/ComponentMainButton";

const CardOfProject = (props) => {
    const title = props.title;
    return (
        <div className={style.container}>
            <h3>{title}</h3>
            <ComponentMainButton content="Пожертвувати" color="#E5C201"/>
        </div>
    )
}
export default CardOfProject;
