import style from "./ChoosedProject.module.css";
import ScrollToTop from "../../../components/scrollToTop";
import ComponentMainButton from "../../../components/ComponentMainButton/ComponentMainButton";
import ArrowBack from "../../../components/ArrowBack/ArrowBack";
import {useNavigate, useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import axios from "axios";

const ChoosedProject = () => {
    const navigate = useNavigate();
    const {id} = useParams();
    const [data, setData] = useState();

    useEffect(() => {
        axios(process.env.REACT_APP_LINKTOAPI + "projects/" + id).then(resp => {
            setData(resp.data);
        }).catch(error => {
            navigate("/error");
        })
    }, []);
    if (!data) {
        return "";
    }

    function displaySubPage() {
        navigate("/donat")
    }

    function displayOneStepAgo() {
        navigate(-1);
    }

    return (
        <div className="containerForSubPage">
            <ScrollToTop/>
            <div className={style.mainContainer}>
                <h4 dangerouslySetInnerHTML={{__html: data.title}}/>
                <p dangerouslySetInnerHTML={{__html: data.content}}/>
                <ComponentMainButton content="Долучитися до збору" color="#FAC000" clickEvent={displaySubPage}/>
                <ArrowBack onClickEvent={displayOneStepAgo}/>
            </div>
        </div>
    )
}
export default ChoosedProject;
