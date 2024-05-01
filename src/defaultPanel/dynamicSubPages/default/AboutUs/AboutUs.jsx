import style from "./AboutUs.module.css";
import Content from "./Content/Content";
import {useSelector} from "react-redux";
import {useContext} from "react";
import UserContext from "../../../../serverContext.js";


const AboutUs = () => {
    let data = useSelector(state => state.websiteDates.websiteDates?.aboutUs);
    if (typeof document == 'undefined') {
        const user = useContext(UserContext);
        data =user.defaultData.aboutUs;
    }


    return (
        <div className={style.container} id="aboutUs">
            <Content data={data}/>
            <img src={import.meta.env.VITE_APP_LINKTOAPI + "files/" + data?.imgId} role="presentation" alt=""/>
        </div>
    )
}
export default AboutUs;
