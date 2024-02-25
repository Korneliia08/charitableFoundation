import style from "./FormAdvice.module.css";
import {faEnvelope, faPen, faPhone, faUser} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import ComponentMainButton from "../../../../../components/ComponentMainButton/ComponentMainButton";
import {useRef, useState} from "react";
import axios from "axios";
import {toast} from "react-toastify";

const FormAdvice = () => {
    let data = {};
    const inputName = useRef();
    const inputEmail = useRef();
    const inputContent = useRef();
    const optionPrefixOfPhone = useRef();
    const inputNumberPhone = useRef();
    let numberOfPhone = "";
    const [blockButton, setBlockButton] = useState(false)

    function sendData(event) {
        event.preventDefault();
        numberOfPhone = optionPrefixOfPhone.current.textContent + inputNumberPhone.current.value;
        inputNumberPhone.current.reportValidity();
        data = CreateAObj();
        setBlockButton(true)
        axios.post('http://10.68.6.106:3000/website-data/contactForm', data).then(resp => {
            toast.success("uchty puchty!");
        }).catch(error => {

            toast.error("BUBU");
            console.log(error);
        }).finally(() => {
            setBlockButton(false)
        });
    }

    function CreateAObj() {
        return {
            name: inputName.current.value,
            email: inputEmail.current.value,
            numberOfPhone,
            content: inputContent.current.value,
        }
    }

    function validate() {
        inputNumberPhone.current.setCustomValidity("");
        if (isNaN(inputNumberPhone.current.value)) {
            inputNumberPhone.current.setCustomValidity("Номер телефону складається із цифр");
        }
    }

    return (
        <div className={style.container}>
            <form onSubmit={sendData}>
                <div className={style.blockForInput}>
                    <div className={style.icon}>
                        <FontAwesomeIcon icon={faUser}
                                         className={style.iconStyle}/>
                    </div>
                    <input type="text" placeholder="Ім’я" required={true} ref={inputName}/>
                </div>
                <div className={style.blockForInput}>
                    <div className={style.icon}>
                        <FontAwesomeIcon icon={faEnvelope}
                                         className={style.iconStyle}/>
                    </div>
                    <input type="email" placeholder="E-mail" required={true} ref={inputEmail}/>
                </div>
                <div className={style.blockForGroup}>
                    <select ref={optionPrefixOfPhone}>
                        <option value="">+380</option>
                    </select>
                    <div className={style.blockForInput}>
                        <div className={style.icon}>
                            <FontAwesomeIcon icon={faPhone}
                                             className={style.iconStyle}/>
                        </div>
                        <input type="text" placeholder="Номер телефону" required={true} minLength={9} maxLength={9}
                               ref={inputNumberPhone}/>
                    </div>
                </div>
                <div className={style.blockForInput}>
                    <div className={style.icon} style={{alignItems: "flex-start", padding: " 12px 7px"}}>
                        <FontAwesomeIcon icon={faPen}
                                         className={style.iconStyle}/>
                    </div>
                    <textarea placeholder="Текст повідомлення" required={true} ref={inputContent}></textarea>
                </div>
                <ComponentMainButton disabled={blockButton} content="Надіслати" color="#E5C201" clickEvent={validate}/>
            </form>
        </div>
    )
}
export default FormAdvice;
