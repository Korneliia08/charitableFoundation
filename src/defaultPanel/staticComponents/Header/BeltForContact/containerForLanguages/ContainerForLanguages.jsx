import style from "./ContainerForLanguages.module.css";
import {useTranslation} from "react-i18next";

const ContainerForLanguages = (props) => {
    const {t, i18n} = useTranslation();
    const isVisibly = props.isVisibly;

    return (
        <div className={style.container} style={{display: isVisibly ? "flex" : "none"}}>
            <span className={style.closeSpan}>X</span>
            <span className={style.chooseLanguage}>Оберіть мову</span>
            <div className={style.containerForLanguages}>
                <div className={style.blockForLanguage} onClick={() => {
                    i18n.changeLanguage('ua')
                }}>
                    <span className={"fi fi-ua"}></span>
                    <span className={style.spanLanguage}>Українська</span>
                </div>
                <div className={style.blockForLanguage} onClick={() => {
                    i18n.changeLanguage('en')
                }}>
                    <span className={"fi fi-us"}></span>
                    <span className={style.spanLanguage}>English</span>
                </div>
            </div>
        </div>
    )
}
export default ContainerForLanguages;
