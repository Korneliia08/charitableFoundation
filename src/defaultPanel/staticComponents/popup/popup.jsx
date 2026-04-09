import React from "react";
import styles from "./PopUp.module.scss";

export default function PopUp({isOpen, onClose, title}) {
    if (!isOpen) return null;

    return (
        <div className={styles.overlay} onClick={onClose}>
            <div
                className={styles.container}
                onClick={(e) => e.stopPropagation()} // zatrzymuje zamknięcie przy kliknięciu w okno
            >
                <div className={styles.header}>
                    <h3>{title}</h3>
                    <button className={styles.closeBtn} onClick={onClose}>
                        ×
                    </button>
                </div>
                <div className={styles.body}>test test test</div>
            </div>
        </div>
    );
}