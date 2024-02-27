import style from "./AspectsOfTheProject.module.css";
import CardOfAspect from "./CardOfAspect/CardOfAspect";
import ComponentMainButton from "../../../../components/ComponentMainButton/ComponentMainButton";
import {useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";
import ArrowBack from "../../../../components/ArrowBack/ArrowBack";

const AspectsOfTheProject = (props) => {
    const navigate = useNavigate();
    const data = useSelector(state => state.websiteDates.websiteDates.aspects);
    const areAllAspects = props.allAspects;
    const allAspects = useSelector(state => state.aspects.aspects);
    let aspectCards = allAspects.map((aspect, index) => <CardOfAspect data={aspect}
                                                                      key={index}/>);

    if (!areAllAspects) {
        aspectCards = aspectCards.slice(0, 9);
    }

    function desplaySubPage() {
        navigate("/aspects")
    }

    function displayOneStepAgo() {
        navigate(-1);
    }

    if (!data) {
        return <h4>Loading....</h4>
    }
    return (
        <div className={style.container} style={{paddingTop: areAllAspects ? "100px" : ""}}>
            {areAllAspects && <ArrowBack onClickEvent={displayOneStepAgo}/>}
            <h2 dangerouslySetInnerHTML={{__html: data.titleOfHeading}}></h2>
            <p className={style.shortDescriptionUnderHeadline}
               dangerouslySetInnerHTML={{__html: data.mainDescription}}></p>
            <div className={style.containerForActivities}>
                {aspectCards}
            </div>
            <div className={style.blockForBtn} style={{display: !areAllAspects ? "" : "none"}}>
                {allAspects.length > 9 &&
                    <ComponentMainButton content="Усі аспекти" color="#1265A8" clickEvent={desplaySubPage}/>}
            </div>
        </div>
    )
}
export default AspectsOfTheProject;
