import style from "./Nav.module.css";
import {HashLink} from "react-router-hash-link";
import toScroll from "../../../../../pipes/toScroll";

const Nav = () => {
    return (
        <div className={style.container}>
            <HashLink scroll={(element) => toScroll(element)} to={"./#body"}>Головна</HashLink>
            <HashLink scroll={(element) => toScroll(element)} to={"./#aboutUs"}>Про нас</HashLink>
            <HashLink scroll={(element) => toScroll(element)} to={"./#activities"}>Діяльність</HashLink>
            <HashLink scroll={(element) => toScroll(element)} to={"./#ourProjects"}>Наші проекти</HashLink>
            <HashLink scroll={(element) => toScroll(element)} to={"./#advice"}>Консультація</HashLink>
            <HashLink scroll={(element) => toScroll(element)} to={"/details"}>Реквізити</HashLink>
            <HashLink scroll={(element) => toScroll(element)} to={"./#footer"}>Контакти</HashLink>
        </div>
    )
}
export default Nav;
