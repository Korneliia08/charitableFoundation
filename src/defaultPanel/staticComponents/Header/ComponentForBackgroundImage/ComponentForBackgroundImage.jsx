import style from "./ComponentForBackgroundImage.module.css";
import backGroundImage from "../../../../assets/images/header.png";
import ComponentMainButton from "../../../../components/ComponentMainButton/ComponentMainButton";
import {useNavigate} from "react-router-dom";

const ComponentForBackgroundImage = () => {
    const navigate = useNavigate();

    function displaySubpage() {
        navigate('/aboutUs');
    }

    return (
        <div className={style.mainContainer} style={{backgroundImage: `url(${backGroundImage})`}}>
            <div className={style.container}>
                <h2>Благодійна організація</h2>
                <h1>Благодійний фонд - могутність народу</h1>
                <div className={style.blockForBtns}>
                    <ComponentMainButton content="Дізнатися більше" color="#FAC000" clickEvent={displaySubpage}/>
                    <ComponentMainButton content="Зробити пожертву" color="#1265A8"/>
                </div>
            </div>
        </div>
    )
}
export default ComponentForBackgroundImage;
