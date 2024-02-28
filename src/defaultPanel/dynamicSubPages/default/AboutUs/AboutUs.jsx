import style from "./AboutUs.module.css";
import Content from "./Content/Content";
import aboutImage from "../../../../assets/images/aboutUs.png";
import {useSelector} from "react-redux";


const AboutUs = () => {
    const data = useSelector(state => state.websiteDates.websiteDates.aboutUs);


    if (!data) {
        return <h2>Loading....</h2>
    }
    return (
        <div className={style.container} id="aboutUs">
            <Content data={data}/>
            <img src={aboutImage} alt="aboutUs"/>
        </div>
    )
}
export default AboutUs;
