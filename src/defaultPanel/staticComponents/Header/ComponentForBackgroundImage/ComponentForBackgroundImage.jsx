import style from "./ComponentForBackgroundImage.module.css";
import ComponentMainButton from "../../../../components/ComponentMainButton/ComponentMainButton";
import {useNavigate} from "react-router-dom";
import {useSelector} from "react-redux";
import {useTranslation} from "react-i18next";

const ComponentForBackgroundImage = (props) => {
    const navigate = useNavigate();
    const data = props.data;
    const imageSrc = useSelector(state => state.websiteDates.websiteDates.header.bannerId);

    const {t} = useTranslation();

    function displaySubpageAbout() {
        navigate('/aboutUs');
    }

    function displaySubpageDonat() {
        navigate('/donat');
    }

    return (
        <div className={style.mainContainer}
             style={{backgroundImage: `url(${import.meta.env.VITE_APP_LINKTOAPI + "files/" + imageSrc})`}}>
            <div className={style.container}>
                <h2>{data.titleOfCategoryOfWebsite}</h2>
                <h1>{data.titleOfWebsite}</h1>
                <div className={style.blockForBtns}>
                    <ComponentMainButton styleClass={style.btn} content={t('translation:allBtns.learnMore')}
                                         color="#FAC000"
                                         clickEvent={displaySubpageAbout}/>
                    <ComponentMainButton styleClass={style.btn} content={t('translation:allBtns.makeDonat')}
                                         color="#1265A8"
                                         clickEvent={displaySubpageDonat}/>
                </div>
            </div>
        </div>
    )
}
export default ComponentForBackgroundImage;
