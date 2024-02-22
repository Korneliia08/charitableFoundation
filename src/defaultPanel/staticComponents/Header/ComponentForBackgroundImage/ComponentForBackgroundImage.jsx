import style from "./ComponentForBackgroundImage.module.css";
import backGroundImage from "../../../../assets/images/header.png";
import ComponentMainButton from "../../../../components/ComponentMainButton/ComponentMainButton";

const ComponentForBackgroundImage = () => {
    return (
        <div className={style.mainContainer} style={{backgroundImage: `url(${backGroundImage})`}}>
            <div className={style.container}>
                <h2>Благодійна організація</h2>
                <h1>Благодійний фонд - майбутність народу</h1>
                <div className={style.blockForBtns}>
                    <ComponentMainButton content="Дізнатися більше" color="#FAC000"/>
                    <ComponentMainButton content="Зробити пожертву" color="#1265A8"/>
                </div>
            </div>
        </div>
    )
}
export default ComponentForBackgroundImage;
