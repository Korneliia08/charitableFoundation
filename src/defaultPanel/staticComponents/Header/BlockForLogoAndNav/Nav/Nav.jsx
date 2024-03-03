import style from "./Nav.module.css";
import {Turn as Hamburger} from 'hamburger-react'
import NavOptions from "../NavOptions/NavOptions";

const Nav = () => {
    const allProjects = useSelector(state => state.projects.projects);
    return (
        <div className={style.container}>
            <HashLink scroll={(element) => toScroll(element)} to={"./#body"}>Головна</HashLink>
            <HashLink scroll={(element) => toScroll(element)} to={"./#aboutUs"}>Про нас</HashLink>
            <HashLink scroll={(element) => toScroll(element)} to={"./#ourProjects"}>
                {allProjects.length > 1 ? <>Наші проекти</> : <>Наш проект</>}
            </HashLink>
            <HashLink scroll={(element) => toScroll(element)} to={"./#advice"}>Консультація</HashLink>
            <HashLink scroll={(element) => toScroll(element)} to={"/details"}>Реквізити</HashLink>
            <HashLink scroll={(element) => toScroll(element)} to={"./#footer"}>Контакти</HashLink>
        </div>
    )
}
export default Nav;
