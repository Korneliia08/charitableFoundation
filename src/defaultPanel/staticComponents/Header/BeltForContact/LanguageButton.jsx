
import { Modal } from 'react-responsive-modal';
import ContainerForLanguages from "./containerForLanguages/ContainerForLanguages.jsx";
import {useTranslation} from "react-i18next";
import {useState} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faLanguage} from "@fortawesome/free-solid-svg-icons";
import style from "./BeltForContact.module.css";

const LanguageButton = (props) => {
    const {t} = useTranslation();
    const [openAllLanguages, setOpenAllLanguages] = useState(false);
    function displayLanguages() {
        setOpenAllLanguages(!openAllLanguages);
    }

    return (
        <>

    <FontAwesomeIcon icon={faLanguage} className={style.icon}             onClick={displayLanguages}/>
        <Modal
            closeOnEsc={()=>setOpenAllLanguages(false)}
            open={openAllLanguages}
            onClose={()=>setOpenAllLanguages(false)}
            onOverlayClick={()=>setOpenAllLanguages(false)}
            // blockScroll={true}
            closeIcon={false}
            center={true}
        >
            <ContainerForLanguages setOpenAllLanguages={setOpenAllLanguages}/>
        </Modal>
        </>
    )
}
export default LanguageButton
