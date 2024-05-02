import style from "./Content.module.css";
import {useTranslation} from "react-i18next";

const Content = () => {
    const [t] = useTranslation();
    return (
        <div className={style.container}>
            <h3>{t('translation:adviceComponent.title')}</h3>
            <p>{t('translation:adviceComponent.content')}</p>
        </div>
    )
}
export default Content;
