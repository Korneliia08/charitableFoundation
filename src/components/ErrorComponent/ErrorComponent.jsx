import style from "./ErrorComponent.module.css";
import {useNavigate} from "react-router-dom";

const ErrorComponent = () => {
    const navigate = useNavigate();

    function displayHome() {
        navigate("/");
    }

    return (
        <div className={style.container}>
            <div className={style.containerForBackGroundAndNumber}>
                <span className={style.spanErrorNumber}>500</span>
                <div className={style.containerForBackGround}></div>
            </div>
            <span className={style.mainSpan}>Вибачте за тимчасові незручності. Сталася внутрішня помилка сервера. Наша команда вже працює над вирішенням цього питання. Дякуємо за ваше розуміння та терпіння.</span>
            <button onClick={displayHome}>Спробуйте ще раз</button>
        </div>
    )
}
export default ErrorComponent;
