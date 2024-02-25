import style from "./OurProjects.module.css";
import CardOfProject from "./CardOfProject/CardOfProject";
import ComponentMainButton from "../../../../components/ComponentMainButton/ComponentMainButton";
import {useNavigate} from "react-router-dom";
import ArrowBack from "../../../../components/ArrowBack/ArrowBack";
import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {setProjects} from "../../../../data/reducers/projectReducer";
import axios from "axios";

const OurProjects = (props) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const areAllProjects = props.allProjects;
    const allProjects = useSelector(state => state.projects.projects);
    let projectCards = allProjects.map((project, index) => <CardOfProject data={project} key={index}/>);
    if (!areAllProjects) {
        projectCards = projectCards.slice(0, 4);
    }

    useEffect(() => {
        axios('http://10.68.6.106:3000/projects').then(
            resp => {
                dispatch(setProjects(resp.data));
            }
        ).catch(error => console.log(error));
    }, []);

    function desplaySubPage() {
        navigate("/projects");
    }

    function displayOneStepAgo() {
        navigate("/");
    }

    return (
        <div className={style.container} id="ourProjects" style={{paddingTop: areAllProjects ? "100px" : ""}}>
            {areAllProjects && <ArrowBack onClickEvent={displayOneStepAgo}/>}
            {projectCards.length > 1 ? <h2>Наші проекти</h2> : <h2>Наш проект</h2>}
            <div className={style.containerForCards}>
                {projectCards}
            </div>
            <div className={style.blockForBtn} style={{display: !areAllProjects ? "" : "none"}}>
                <ComponentMainButton content="Усі проекти" color="#FFD801" clickEvent={desplaySubPage}/>
            </div>
        </div>
    )
}
export default OurProjects;