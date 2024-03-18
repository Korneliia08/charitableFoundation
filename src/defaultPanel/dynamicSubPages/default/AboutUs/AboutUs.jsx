import style from "./AboutUs.module.css";
import Content from "./Content/Content";
import {useSelector} from "react-redux";


const AboutUs = () => {
    const data = useSelector(state => state.websiteDates.websiteDates?.aboutUs);


    if (!data) {
        return "";
    }
    return (
        <div className={style.container} id="aboutUs">
            <Content data={data}/>
            <img src={process.env.REACT_APP_LINKTOAPI + "files/" + data.imgId} role="presentation" alt=""/>
        </div>
    )
}
export default AboutUs;
