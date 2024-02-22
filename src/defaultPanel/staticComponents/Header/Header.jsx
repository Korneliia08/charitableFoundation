import style from "./Header.module.css";
import BeltForContact from "./BeltForContact/BeltForContact";
import ComponentForBackgroundImage from "./ComponentForBackgroundImage/ComponentForBackgroundImage";

const Header = () => {

    return (
        <div className={style.container}>
            <BeltForContact/>
            <ComponentForBackgroundImage/>

        </div>
    )
}//
export default Header;
