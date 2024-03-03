import style from "./Nav.module.css";
import {Turn as Hamburger} from 'hamburger-react'
import NavOptions from "../NavOptions/NavOptions";

const Nav = (props) => {

    return (
        <>
            <div className={style.container} ref={props.navRedf}>
                <NavOptions/>
            </div>
            <div className={style.hamburger}>
                <Hamburger size={35} toggled={props.isOpen} toggle={props.setOpen}/>
            </div>
        </>

    )
}
export default Nav;
