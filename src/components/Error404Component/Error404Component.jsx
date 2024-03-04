import style from "./Error404Component.module.css";
import errorImg from "../../assets/images/errorUA.jpg";
import {useNavigate} from "react-router-dom";

const Error404Component = () => {
    const navigate = useNavigate();

    function displayMainPage() {
        navigate("/");
    }

    return (
        <div className={style.container}>
            <img src={errorImg} alt="error 404"/>
            <span>Сторінка не знайдена</span>
            <button onClick={displayMainPage}>головна сторінка</button>
        </div>
    )
}
export default Error404Component;
