import style from "./Advice.module.css";
import Content from "./Content/Content";
import FormAdvice from "./FormAdvice/FormAdvice";
import {useSelector} from "react-redux";

const Advice = (props) => {
    const imageId = useSelector(state => state.websiteDates.websiteDates.advice?.imageId);
    if (!imageId) {
        return "";
    }
    return (
        <div className={style.container} id="advice" ref={props.advice}
             style={{backgroundImage: `url(${import.meta.env.VITE_APP_LINKTOAPI + "files/" + imageId})`}}>
            <Content/>
            <FormAdvice/>
            <div className={style.blueBackground}></div>
        </div>
    )
}
export default Advice;
