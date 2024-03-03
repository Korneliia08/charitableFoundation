import {HashLink} from "react-router-hash-link";
import toScroll from "../../../../../pipes/toScroll";
import {useSelector} from "react-redux";

const NavOptions = (props) => {
    const allProjects = useSelector(state => state.projects.projects);

    function close() {
        if (props.setOpen) {
            props.setOpen(false)
        }
    }

    return (
        <>
            <HashLink scroll={(element) => toScroll(element)} onClick={close} to={"./#body"}>Головна</HashLink>
            <HashLink scroll={(element) => toScroll(element)} onClick={close} to={"./#aboutUs"}>Про нас</HashLink>
            <HashLink scroll={(element) => toScroll(element)} onClick={close} to={"./#ourProjects"}>
                {allProjects.length > 1 ? <>Наші проекти</> : <>Наш проект</>}
            </HashLink>
            <HashLink scroll={(element) => toScroll(element)} onClick={close} to={"./#advice"}>Консультація</HashLink>
            <HashLink scroll={(element) => toScroll(element)} onClick={close} to={"/details"}>Реквізити</HashLink>
            <HashLink scroll={(element) => toScroll(element)} onClick={close} to={"./#footer"}>Контакти</HashLink>
        </>
    )
}
export default NavOptions;
