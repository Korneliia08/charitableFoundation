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
                      to={"./#body"}>{t('translation:header.nav.main')}</HashLink>
            <HashLink scroll={(element) => toScroll(element)} onClick={close}
                      to={"./#aboutUs"}>{t('translation:header.nav.about')}</HashLink>
            <HashLink scroll={(element) => toScroll(element)} onClick={close} to={"./#ourProjects"}>
                {allProjects.length > 1 ? <>{t('translation:header.nav.ourProjects')}</> : <>{t('translation:header.nav.ourProject')}</>}
            </HashLink>
            <HashLink scroll={(element) => toScroll(element)} onClick={close}
                      to={"./#advice"}>{t('translation:header.nav.consultation')}</HashLink>
            <HashLink scroll={(element) => toScroll(element)} onClick={close}
                      to={"/details"}>{t('translation:header.nav.requisites')}</HashLink>
            <HashLink scroll={(element) => toScroll(element)} onClick={close}
                      to={"./#footer"}>{t('translation:header.nav.contact')}</HashLink>
        </>
    )
}
export default NavOptions;
