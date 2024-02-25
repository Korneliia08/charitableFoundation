import style from "./ComponentForBackgroundImage.module.css";
import backGroundImage from "../../../../assets/images/header.png";
import ComponentMainButton from "../../../../components/ComponentMainButton/ComponentMainButton";
import {useNavigate} from "react-router-dom";

const ComponentForBackgroundImage = (props) => {
    const navigate = useNavigate();
    const data = props.data;

    function displaySubpage() {
        navigate('/aboutUs');
    }

    return (
        <div className={style.mainContainer} style={{backgroundImage: `url(${backGroundImage})`}}>
            <div className={style.container}>
                <h2>{data.titleOfCategoryOfWebsite}</h2>
                <h1>{data.titleOfWebsite}</h1>
                <div className={style.blockForBtns}>
                    <ComponentMainButton content="Дізнатися більше" color="#FAC000" clickEvent={displaySubpage}/>
                    <ComponentMainButton content="Зробити пожертву" color="#1265A8"/>
                </div>
            </div>
        </div>
    )
}
export default ComponentForBackgroundImage;
