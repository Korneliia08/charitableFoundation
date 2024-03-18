import style from "./Header.module.css";
import ComponentForBackgroundImage from "./ComponentForBackgroundImage/ComponentForBackgroundImage";
import {useSelector} from "react-redux";

const Header = () => {
    const dataOfHeader = useSelector(state => state.websiteDates.websiteDates.header);

    if (!dataOfHeader) {
        return "";
    }

    return (
        <div className={style.container}>
            <ComponentForBackgroundImage data={dataOfHeader}/>
        </div>
    )
}//
export default Header;
