import {HashLink} from "react-router-hash-link";
import toScroll from "../../../../../pipes/toScroll";
import {useSelector} from "react-redux";
import {useTranslation} from "react-i18next";

const NavOptions = (props) => {
    const allProjects = useSelector(state => state.projects.projects);
    const {t} = useTranslation();

    function close() {
        if (props.setOpen) {
            props.setOpen(false)
        }
    }

    return (
        <>
            <HashLink scroll={(element) => toScroll(element)} onClick={close}
                      to={"./aboutUs"}>{t('translation:header.nav.about')}</HashLink>
            <HashLink scroll={(element) => toScroll(element)} onClick={close}

                      to={"./donat"}>{t('translation:header.nav.donat')}</HashLink>
            <HashLink scroll={(element) => toScroll(element)} onClick={close}
                      to={"/details"}>{t('translation:header.nav.requisites')}</HashLink>
            <HashLink scroll={(element) => toScroll(element)} onClick={close}
                      to={"/departmentCommunications"}>{t('translation:header.nav.departmentCommunications')}</HashLink>
        </>
    )
}
export default NavOptions;
