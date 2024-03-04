import style from "./ComponentForBackgroundImage.module.css";
import backGroundImage from "../../../../assets/images/header.png";
import ComponentMainButton from "../../../../components/ComponentMainButton/ComponentMainButton";
import {useNavigate} from "react-router-dom";

const ComponentForBackgroundImage = (props) => {
    const navigate = useNavigate();
    const data = props.data;

    function displaySubpageAbout() {
        navigate('/aboutUs');
    }

    function displaySubpageDonat() {
        navigate('/donat');
    }

    return (
        <div className={style.mainContainer} style={{backgroundImage: `url(${backGroundImage})`}}>
            <div className={style.container}>
                <h2>{data.titleOfCategoryOfWebsite}</h2>
                <h1>{data.titleOfWebsite}</h1>
                <div className={style.blockForBtns}>
                    <ComponentMainButton styleClass={style.btn} content="Дізнатися більше" color="#FAC000"
                                         clickEvent={displaySubpageAbout}/>
                    <ComponentMainButton styleClass={style.btn} content="Зробити пожертву" color="#1265A8"
                                         clickEvent={displaySubpageDonat}/>
                </div>
            </div>
        </div>
    )
}
export default ComponentForBackgroundImage;
