import style from "./Advice.module.css";
import Content from "./Content/Content";
import FormAdvice from "./FormAdvice/FormAdvice";

const Advice = () => {
    return (
        <div className={style.container}>
            <Content/>
            <FormAdvice/>
            <div className={style.blueBackground}></div>
        </div>
    )
}
export default Advice;
