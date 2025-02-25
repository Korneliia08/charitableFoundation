import style from "./ChoosedPartner.module.css";
import ArrowBack from "../../../components/ArrowBack/ArrowBack";
import ScrollToTop from "../../../components/scrollToTop";
import {useTranslation} from "react-i18next";
import {useNavigate} from "react-router-dom";

const ChoosedPartner = (props) => {

    const title = "Мікайлов Нізамі Вели огли";
    const describe = "Мікайлов Нізамі Вели огли наш представник фонду по Південно -Західній Азії. Під час нашої спільної роботи над проектом Могутність Народу, Мікайлов Нізамі Вели огли, продемонстрував виняткову ефективність у залученні спонсорів та організації заходів для розвитку проекту.\n" +
        "Мікайлов Нізамі Вели огли має глибоке розуміння потреб регіону, відмінні організаторські здібності, розвинені комунікативні навички, досвід роботи з місцевими співтовариствами, знання специфіки роботи благодійних організацій, здатність працювати в команді і самостійно. \n" +
        "Продемонстрував високу працездатність, наполегливість у досягненні цілей.";
    const navigate = useNavigate();

    function displayOneStepAgo() {
        navigate(-1);
    }

    const [t, i18n] = useTranslation()
    return (
        <div className={style.container}>
            <ScrollToTop/>
            <div className="containerForSubPage">
                <div className={style.containerForContent}>
                    <ArrowBack top={'-10px'} onClickEvent={displayOneStepAgo}/>
                    <h2 className={style.title}>{title}</h2>
                    <p className={style.describeContent}>{describe}</p>
                </div>
            </div>
        </div>
    );
}
export default ChoosedPartner;
