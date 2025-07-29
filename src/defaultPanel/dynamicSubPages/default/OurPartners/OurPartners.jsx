import style from "./OurPartners.module.css";
import image from "./../../../../assets/images/partners.jpg";
import AllPartnersContainer from "./allPartnersContainer/AllPartnersContainer.jsx";
import {useTranslation} from "react-i18next";

const OurPartners = () => {
    const [t] = useTranslation()
    return (
        <div className={style.container} id="ourPartners">
            <div className={style.wrapper}>
                <div className={style.left}>
                    <img src={image} alt="partners" className={style.imageStyle}/>
                </div>
                <div className={style.right}>
                    <h4 className={style.title} dangerouslySetInnerHTML={{__html: t('ourPartners.title')}}></h4>
                    <p className={style.describe}>{t('ourPartners.description')}</p>
                </div>
            </div>
            <AllPartnersContainer/>
        </div>
    )
}
export default OurPartners;
