import style from "./ContentAboutUsFully.module.css";
import {useSelector} from "react-redux";

const ContentAboutUsFully = () => {
    const data = useSelector(state => state.websiteDates?.websiteDates?.aboutUs);
    if (!data) {
        return <h2>Loading....</h2>
    }

    return (
        <div className={style.container}>
            <h2>{data.titleOfHeading}</h2>
            <p dangerouslySetInnerHTML={{__html: data.fullDescription}}></p>
        </div>
    )
}
export default ContentAboutUsFully;
