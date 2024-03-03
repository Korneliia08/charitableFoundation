import style from "./CardOfProject.module.css";
import {useNavigate} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEye} from "@fortawesome/free-solid-svg-icons";

const CardOfProject = (props) => {
    const navigate = useNavigate();
    const data = props.data;


    function displaySubPage() {
        navigate('/project/' + data.id);
    }

    return (
        <div className={style.container} onClick={displaySubPage}>
            <h3 dangerouslySetInnerHTML={{__html: data.title}}></h3>
            <FontAwesomeIcon icon={faEye} className={style.iconEyes}/>
        </div>
    )
}
export default CardOfProject;
