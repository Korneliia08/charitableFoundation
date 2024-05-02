import ArrowBack from "../../../components/ArrowBack/ArrowBack";
import {useNavigate} from "react-router-dom";
import style from "./Details.module.css";
import ComponentMainButton from "../../../components/ComponentMainButton/ComponentMainButton";
import ScrollToTop from "../../../components/scrollToTop";
import {useSelector} from "react-redux";
import Detail from "./Detail/Detail";
import flyDove from "../../../assets/images/flyDove.png";
import {useState} from "react";
import {useTranslation} from "react-i18next";


const Details = () => {
    const navigate = useNavigate();
    const data = useSelector(state => state.websiteDates.websiteDates?.detailSubPage);
    const allDetails = data?.details;
    const [t] = useTranslation()

    function displayOneStepAgo() {
        navigate(-1);
    }

    function displaySubPage() {
        navigate("/donat");
    }

    const [styleFlyDove, setStyleFlyDove] = useState(false);

    function setStyleToFlyDove() {
        setStyleFlyDove(true);
    }

    function setStyleToNoFlyDove() {
        setStyleFlyDove(false);
    }

    if (!allDetails) {
        return "";
    }
    const details = allDetails.map((detail, index) => <Detail data={detail} key={index}/>);
    return (
        <div className="containerForSubPage">
            <ScrollToTop/>
            <div className={style.mainContainer}>
                <h3>{data.titleOfHeading}</h3>
                <div className={style.containerForDetails}>
                    {details}
                </div>
                <div className={style.blockForImage}>
                    <img src={import.meta.env.VITE_APP_LINKTOAPI + "files/" + data.imageId} role="presentation" alt=""/>
                    <span dangerouslySetInnerHTML={{__html: data.descriptionToImage}}></span>
                </div>
                <div className={style.blockForButton}>
                    <img src={flyDove} alt="" role="presentation"
                         className={`${style.imgNoFlyDove} ${styleFlyDove ? style.imgFlyDove : ""}`}/>
                    <ComponentMainButton content={t('translation:allBtns.joinToDonation')} color="#FAC000"
                                         onMouseEnter={setStyleToFlyDove} onMouseLeave={setStyleToNoFlyDove}
                                         clickEvent={displaySubPage}/>

                </div>
            </div>
            <ArrowBack className={style.arrow} onClickEvent={displayOneStepAgo}/>
        </div>
    )
}
export default Details;
