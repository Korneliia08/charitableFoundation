import style from "./OurProjects.module.css";
import CardOfProject from "./CardOfProject/CardOfProject";
import ComponentMainButton from "../../../../components/ComponentMainButton/ComponentMainButton";
import {useNavigate} from "react-router-dom";
import ArrowBack from "../../../../components/ArrowBack/ArrowBack";
import {useSelector} from "react-redux";
import ScrollToTop from "../../../../components/scrollToTop";

const OurProjects = (props) => {
    const navigate = useNavigate();
    const areAllProjects = props.allProjects;
    const allProjects = useSelector(state => state.projects.projects);
    let projectCards = allProjects.map((project, index) => <CardOfProject data={project} key={index}/>);
    if (!areAllProjects) {
        projectCards = projectCards.slice(0, 4);
    }

    function desplaySubPage() {
        navigate("/projects");
    }

    function displayOneStepAgo() {
        navigate(-1);
    }

    return (
        <div className={style.container} id="ourProjects" style={{paddingTop: areAllProjects ? "100px" : ""}}>
            <ScrollToTop/>
            {areAllProjects && <ArrowBack onClickEvent={displayOneStepAgo}/>}
            {projectCards.length > 1 ? <h2>Наші проекти</h2> : <h2>Наш проект</h2>}
            <div className={style.containerForCards}>
                {projectCards}
            </div>
            <div className={style.blockForBtn} style={{display: !areAllProjects ? "" : "none"}}>
                <ComponentMainButton content="Усі проекти" clickEvent={desplaySubPage} styleClass={style.mainBtn}/>
            </div>
        </div>
    )
}
export default OurProjects;
