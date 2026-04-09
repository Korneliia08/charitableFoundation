import React from "react";
import styles from "./PopUp.module.scss";
import soldiers from "./../../../assets/imagesOfProject/soldiers.jpg";
import {NavLink} from "react-router-dom";

export default function PopUp({isOpen, onClose, title, children}) {
    if (!isOpen) return null;

    return (
        <div className={styles.overlay} onClick={onClose}>
            <div className={styles.container} onClick={(e) => e.stopPropagation()}>
                <div className={styles.header}>
                    <h2>
                        Терміновий збір для 21-ї бригади!
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
                                <p>
                                    Друзі, для 21-ї бригади на передовій збираємо кошти на технічне забезпечення
                                    FPV-дронів:
                                </p>
                                <ul>
                                    <li>Акумулятори та зарядні станції — щоб дрони літали довше</li>
                                    <li>Камери високої роздільності та стабілізатори — для чіткої картинки</li>
                                    <li>Передавачі, антени, підсилювачі сигналу — щоб зв'язок не гас</li>
                                    <li>Комплектуючі для ударних моделей — мотори, рами, електроніка</li>
                                </ul>
                                <p>
                                    Усе йде напряму хлопцям. Переказуйте сюди: <span className={styles.requisites}>IBAN: UA503348510000000026009236330</span>.
                                </p>
                                <p>Звіти — кожні два тижні, все відкрито.</p>
                                <p>
                                    Якщо можете допомогти — дякуємо від душі. Якщо ні — просто поділіться, хай побачать
                                    більше людей.
                                </p>
                                <p className="glory">Слава Україні!</p>
                            </>
                        )}
                    </div>
                </div>

                <div className={styles.footer}>
                    <NavLink onClick={() => onClose()} to={'/project/4'} className={styles.donateBtn}>
                        Перейти
                    </NavLink>
                </div>
            </div>
        </div>
    );
}