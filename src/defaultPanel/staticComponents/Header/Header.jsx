import style from "./Header.module.css";
import Nav from "./Nav/Nav";
import BeltForContact from "./BeltForContact/BeltForContact";
import ComponentForLogoAndTitle from "./ComponentForLogoAndTitle/ComponentForLogoAndTitle";

const Header = () => {
    return (
        <div className={style.container}>
            <BeltForContact/>
            <div className={style.blockForLogoAndNav}>
                <ComponentForLogoAndTitle/>
                <Nav/>
            </div>
        </div>
    )
}
export default Header;
