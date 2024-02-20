import style from "./ComponentForBackgroundImage.module.css";
import backGroundImage from "../../../../assets/images/header.png";

const ComponentForBackgroundImage = () => {
    return (
        <div className={style.mainContainer} style={{backgroundImage: `url(${backGroundImage})`}}>
            <div className={style.container}>
                <h2>Благодійна організація</h2>
                <h1>БЛАГОДІЙНИЙ ФОНД
                    УКРАЇНА-БУДІВНИЦТВО
                    МАЙБУТНЬОГО</h1>
                <div className={style.blockForBtns}>
                    <button className={style.btnKnowMore}>Дізнатися більше</button>
                    <button className={style.btnMakeADonation}>Зробити пожертву</button>
                </div>
            </div>
        </div>
    )
}
export default ComponentForBackgroundImage;
