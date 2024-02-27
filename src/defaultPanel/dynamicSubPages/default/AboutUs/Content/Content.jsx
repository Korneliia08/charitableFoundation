import style from "./Content.module.css";
import ComponentMainButton from "../../../../../components/ComponentMainButton/ComponentMainButton";
import {useNavigate} from "react-router-dom";

const Content = (props) => {
    const navigate = useNavigate();
    const data = props.data;

    function displaySubPage() {
        navigate("/aboutUs");
    }

    return (
        <div className={style.container}>
            <h2>{data.titleOfHeading}</h2>
            <p dangerouslySetInnerHTML={{__html: data.shortDescription}}></p>
            <ComponentMainButton content="Детальніше" color="#FFD801" clickEvent={displaySubPage}/>
        </div>
    )
}
export default Content;
