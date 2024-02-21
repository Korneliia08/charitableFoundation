import style from "./FormAdvice.module.css";
import {faEnvelope, faPen, faPhone, faUser} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const FormAdvice = () => {
    return (
        <div className={style.container}>
            <form>
                <div className={style.blockForInput}>
                    <div className={style.icon}>
                        <FontAwesomeIcon icon={faUser} className={style.iconStyle}/>
                    </div>
                    <input type="text" placeholder="Ім’я"/>
                </div>
                <div className={style.blockForInput}>
                    <div className={style.icon}>
                        <FontAwesomeIcon icon={faEnvelope} className={style.iconStyle}/>
                    </div>
                    <input type="email" placeholder="E-mail"/>
                </div>
                <div className={style.blockForGroup}>
                    <select>
                        <option value="">+380</option>
                    </select>
                    <div className={style.blockForInput}>
                        <div className={style.icon}>
                            <FontAwesomeIcon icon={faPhone} className={style.iconStyle}/>
                        </div>
                        <input type="text" placeholder="Номер телефону"/>
                    </div>
                </div>
                <div className={style.blockForInput}>
                    <div className={style.icon}>
                        <FontAwesomeIcon icon={faPen} className={style.iconStyle}/>
                    </div>
                    <textarea placeholder="Текст повідомлення"></textarea>
                </div>
            </form>
        </div>
    )
}
export default FormAdvice;
