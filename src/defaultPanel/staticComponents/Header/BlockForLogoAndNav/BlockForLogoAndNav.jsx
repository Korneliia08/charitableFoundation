import style from "./BlockForLogoAndNav.module.css";
import ComponentForLogoAndTitle from "../ComponentForLogoAndTitle/ComponentForLogoAndTitle";
import Nav from "../Nav/Nav";

const BlockForLogoAndNav = (props) => {
    const belt = props.belt;
    return (
        <div className={style.blockForLogoAndNav}
             style={{top: belt ? "35px" : " 0px", padding: belt ? "15px 0" : " 5px 0px"}}>
            <ComponentForLogoAndTitle belt={belt}/>
            <Nav/>
        </div>
    )
}
export default BlockForLogoAndNav;
