import style from "./AboutUs.module.css";
import Content from "./Content/Content";
import aboutImage from "../../../../assets/images/aboutUs.png";


const AboutUs = () => {
    return (
        <div className={style.container} id="aboutUs">
            <Content/>
            <img src={aboutImage} alt="aboutUs"/>
        </div>
    )
}
export default AboutUs;
