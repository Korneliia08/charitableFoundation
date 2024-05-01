import style from "./Content.module.css";
import ComponentMainButton from "../../../../../components/ComponentMainButton/ComponentMainButton";
import {useNavigate} from "react-router-dom";
import UserContext from "../../../../../serverContext.js";
import {useContext} from "react";

const Content = (props) => {
    const navigate = useNavigate();
    let data = props.data;

    if (typeof document == 'undefined') {
        const user = useContext(UserContext);
        data =user.defaultData.aboutUs;
    }

    function displaySubPage() {
        navigate("/aboutUs");
    }

    return (
        <div className={style.container}>

            <h2>{data?.titleOfHeading}</h2>
            <p dangerouslySetInnerHTML={{__html: data?.shortDescription}}></p>
            <ComponentMainButton content="Детальніше" color="#FFD801" clickEvent={displaySubPage}/>
        </div>
    )
}
export default Content;
