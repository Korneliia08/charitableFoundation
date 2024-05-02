import style from "./BlockForLogoAndNav.module.css";
import ComponentForLogoAndTitle from "./ComponentForLogoAndTitle/ComponentForLogoAndTitle";
import Nav from "./Nav/Nav";
import {useState} from "react";
import NavOptions from "./NavOptions/NavOptions";
import LanguageButton from "../BeltForContact/LanguageButton.jsx";

const BlockForLogoAndNav = (props) => {
    const belt = props.belt;

    const [isOpen, setOpen] = useState(false)

    return (
        <div>
            <div className={style.emptyBlock}></div>
            <div className={style.blockForLogoAndNav}>
                <div className={style.navContainer}
                     style={{padding: belt ? "15px 10vw 15px 0" : " 5px 0px", height: belt ? '75px' : '60px'}}>
                    <ComponentForLogoAndTitle belt={belt}/>
                    <Nav isOpen={isOpen} setOpen={setOpen}/>

                </div>
                <div className={`${style.hamburger}  ${isOpen ? style.hamburgerOpen : ''}`}>

                    <NavOptions setOpen={setOpen}/>
                </div>
            </div>


        </div>
    )
}
export default BlockForLogoAndNav;
