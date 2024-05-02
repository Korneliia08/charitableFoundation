import {useNavigate, useParams} from "react-router-dom";
import style from "./ChoosedAspect.module.css";
import ArrowBack from "../../../components/ArrowBack/ArrowBack";
import {useEffect, useState} from "react";
import axios from "axios";
import ComponentMainButton from "../../../components/ComponentMainButton/ComponentMainButton";
import ScrollToTop from "../../../components/scrollToTop";
import {useSelector} from "react-redux";
import {useTranslation} from "react-i18next";

const ChoosedAspect = (props) => {
    const navigate = useNavigate();
    const [data, setData] = useState();
    const {id} = useParams();
    const imageId = useSelector(state => state.websiteDates.websiteDates?.aboutUs?.imgId);

    function displayOneStepAgo() {
        navigate(-1);
    }

    function displaySubPage() {
        navigate("/donat");
    }
    const [t, i18n ] = useTranslation()
    useEffect(() => {
        axios(import.meta.env.VITE_APP_LINKTOAPI + 'aspects/' + id+'/'+i18n.language).then(
            resp => {
                setData(resp.data);
            }
        ).catch(err => {
            navigate('/error');
        });
    }, [id,i18n.language]);

    if (!data) {
        return "";
    }
    if (!imageId) {
        return "";
    }

    return (
        <>
            <ScrollToTop/>
            <div className={style.backgroundWithTitle}>
                <h2>{data.title}</h2>
            </div>
            <div className="containerForSubPage withImage">
                <ArrowBack top={'-10px'} onClickEvent={displayOneStepAgo}/>
                <div className={style.container}>
                    <div className={style.containerForContentAndBtn}>
                        <p dangerouslySetInnerHTML={{__html: data.content}}></p>
                        <div className={style.blockForBtn}>
                            <ComponentMainButton content={t('translation:allBtns.makeDonat')} color="#F3CE03"
                                                 clickEvent={displaySubPage}/>
                        </div>
                    </div>
                    <img src={import.meta.env.VITE_APP_LINKTOAPI + "files/" + imageId} role="presentation" alt=""/>
                </div>
            </div>
        </>
    );
}
export default ChoosedAspect;
