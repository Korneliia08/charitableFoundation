import React from "react";
import styles from "./PopUp.module.scss";
import soldiers from "./../../../assets/imagesOfProject/soldiers.jpg";
import {NavLink} from "react-router-dom";
import {useTranslation} from "react-i18next";

export default function PopUp({isOpen, onClose, title, children}) {
    if (!isOpen) return null;
    const [t, i18n] = useTranslation()
    return (
        <div className={styles.overlay} onClick={onClose}>
            <div className={styles.container} onClick={(e) => e.stopPropagation()}>
                <div className={styles.header}>
                    <h2>
                        {t('translation:popTitle')}
                    </h2>
                    <button className={styles.closeBtn} onClick={onClose}>
                        ×
                    </button>
                </div>

                <div className={styles.body}>
                    <img src={soldiers} alt="soldiers" className={styles.image}/>
                    <div className={styles.text}>
                        {children || (
                            <>

                                <span dangerouslySetInnerHTML={{__html: t('translation:popup')}}></span>
                            </>
                        )}
                    </div>
                </div>

                <div className={styles.footer}>
                    <NavLink onClick={() => onClose()} to={'/donat'} className={styles.donateBtn}>
                        {t('translation:popButton')}
                    </NavLink>
                </div>
            </div>
        </div>
    );
}