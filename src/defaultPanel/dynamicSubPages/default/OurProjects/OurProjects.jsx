import style from "./OurProjects.module.css";
import CardOfProject from "./CardOfProject/CardOfProject";
import ComponentMainButton from "../../../../components/ComponentMainButton/ComponentMainButton";
import {useNavigate} from "react-router-dom";
import ArrowBack from "../../../../components/ArrowBack/ArrowBack";
import {useSelector} from "react-redux";
import ScrollToTop from "../../../../components/scrollToTop";
import {useTranslation} from "react-i18next";

const OurProjects = (props) => {
    const navigate = useNavigate();
    const areAllProjects = props.allProjects;
    const [t] = useTranslation()
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
        <div className={`${style.container}  ${areAllProjects ? style.AllProjects : ''}`} id="ourProjects">
            <ScrollToTop/>
            {areAllProjects && <ArrowBack className={style.arrowBack} onClickEvent={displayOneStepAgo}/>}
            {projectCards.length > 1 ? <h2>{t('translation:projects.title1')}</h2> : <h2>{t('translation:projects.title2')}</h2>}
            <div className={style.containerForCards}>
                {projectCards}
            </div>
            {projectCards.length >= 3 &&
                <div className={style.blockForBtn} style={{display: !areAllProjects ? "" : "none"}}>
                    <ComponentMainButton content="Усі проекти" clickEvent={desplaySubPage} styleClass={style.mainBtn}/>
                </div>}
        </div>
    )
}
export default OurProjects;
