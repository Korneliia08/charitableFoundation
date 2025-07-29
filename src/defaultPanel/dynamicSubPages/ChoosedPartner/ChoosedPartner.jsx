import style from "./ChoosedPartner.module.css";
import ArrowBack from "../../../components/ArrowBack/ArrowBack";
import ScrollToTop from "../../../components/scrollToTop";
import {useTranslation} from "react-i18next";
import {useNavigate} from "react-router-dom";

const ChoosedPartner = (props) => {
    const [t] = useTranslation()
    const title = t('ourPartners.partners.0.name');
    const describe = t('ourPartners.partners.0.longDescription');
    const navigate = useNavigate();

    function displayOneStepAgo() {
        navigate(-1);
    }

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
