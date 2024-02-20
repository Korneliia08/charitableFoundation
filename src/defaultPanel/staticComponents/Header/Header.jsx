import style from "./Header.module.css";
import Nav from "./Nav/Nav";
import BeltForContact from "./BeltForContact/BeltForContact";
import ComponentForLogoAndTitle from "./ComponentForLogoAndTitle/ComponentForLogoAndTitle";
import ComponentForBackgroundImage from "./ComponentForBackgroundImage/ComponentForBackgroundImage";

const Header = () => {
    return (
        <div className={style.container}>
            <BeltForContact/>
            <div className={style.blockForLogoAndNav}>
                <ComponentForLogoAndTitle/>
                <Nav/>
            </div>
            <ComponentForBackgroundImage/>
        </div>
    )
}
export default Header;
