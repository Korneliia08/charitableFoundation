import style from "./CardOfProject.module.css";
import ComponentMainButton from "../../../../../components/ComponentMainButton/ComponentMainButton";
import {useNavigate} from "react-router-dom";

const CardOfProject = (props) => {
    const navigate = useNavigate();
    const data = props.data;


    function displaySubPage() {
        navigate('/project/' + data.id);
    }

    return (
        <div className={style.container} onClick={displaySubPage}>
            <h3 dangerouslySetInnerHTML={{__html: data.title}}></h3>
            <ComponentMainButton content="Пожертвувати"
                                 styleClass={style.buttonInProjectCard}
                                 clickEvent={displaySubPage}/>
        </div>
    )
}
export default CardOfProject;
