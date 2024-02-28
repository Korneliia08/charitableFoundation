import style from "./ErrorComponent.module.css";

const ErrorComponent = () => {
    return (
        <div className={style.container}>
            <div className={style.containerForBackGroundAndNumber}>
                <span className={style.spanErrorNumber}>500</span>
                <div className={style.containerForBackGround}></div>
            </div>
            <span className={style.mainSpan}>Вибачте за тимчасові незручності. Сталася внутрішня помилка сервера. Наша команда вже працює над вирішенням цього питання. Якщо Вам потрібна негайна допомога, будь ласка, зверніться до нашого адміністратора за номером [ваш контактний номер]. Дякуємо за ваше розуміння та терпіння.</span>
        </div>
    )
}
export default ErrorComponent;
