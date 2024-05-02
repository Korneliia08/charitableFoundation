import style from "./FormAdvice.module.css";
import {faEnvelope, faPen, faPhone, faUser} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import ComponentMainButton from "../../../../../components/ComponentMainButton/ComponentMainButton";
import {useRef, useState} from "react";
import axios from "axios";
import {toast} from "react-toastify";
import ReCAPTCHA from 'react-google-recaptcha';
import {useTranslation} from "react-i18next";

const FormAdvice = () => {
    let data = {};
    const [t] = useTranslation()
    const inputName = useRef();
    const inputEmail = useRef();
    const inputContent = useRef();
    const optionPrefixOfPhone = useRef();
    const inputNumberPhone = useRef();
    let numberOfPhone = "";
    const [blockButton, setBlockButton] = useState(false)
    const [captcha,setCaptcha] = useState('');
    const [displayReCaptcha,setDisplayReCaptcha] = useState(false);
    function sendData(event) {
        event.preventDefault();
        numberOfPhone = optionPrefixOfPhone.current.textContent + inputNumberPhone.current.value;
        inputNumberPhone.current.reportValidity();
        data = CreateAObj();
        setBlockButton(true)
        axios.post(import.meta.env.VITE_APP_LINKTOAPI+'website-data/contactForm', data).then(resp => {
            toast.success(t('translation:forms.messages.sendSuccess'));

             inputName.current.value='';
             inputEmail.current.value='';
             inputContent.current.value='';
             optionPrefixOfPhone.current.value='';
             inputNumberPhone.current.value='';

        }).catch(error => {
            toast.error(t('translation:forms.messages.sendError'));
        }).finally(() => {
            setBlockButton(false)
            setCaptcha('')
            recaptchaRef.current.reset()



        });
    }

    function CreateAObj() {
        return {
            name: inputName.current.value,
            email: inputEmail.current.value,
            numberOfPhone,
            content: inputContent.current.value,
            reCaptcha:captcha
        }
    }

    function validate() {
        inputNumberPhone.current.setCustomValidity("");
        if (isNaN(inputNumberPhone.current.value)) {
            inputNumberPhone.current.setCustomValidity(t('translation:forms.messages.phoneCustomValidyty'));
        }
    }
    const recaptchaRef = useRef();
    function solve(event){
        setCaptcha(event);
    }

    return (
        <div className={style.container}>
            <form onSubmit={sendData} onKeyPress={()=>setDisplayReCaptcha(true)}>
                <div className={style.blockForInput}>
                    <div className={style.icon}>
                        <FontAwesomeIcon icon={faUser}
                                         className={style.iconStyle}/>
                    </div>
                    <input type="text" placeholder={t('translation:forms.labels.name')} required={true} ref={inputName}/>
                </div>
                <div className={style.blockForInput}>
                    <div className={style.icon}>
                        <FontAwesomeIcon icon={faEnvelope}
                                         className={style.iconStyle}/>
                    </div>
                    <input type="email" placeholder={t('translation:forms.labels.email')} required={true} ref={inputEmail}/>
                </div>
                <div className={style.blockForGroup}>
                    <select ref={optionPrefixOfPhone}>
                        <option value="">+380</option>
                        <option value="">+48</option>
                    </select>
                    <div className={style.blockForInput}>
                        <div className={style.icon}>
                            <FontAwesomeIcon icon={faPhone}
                                             className={style.iconStyle}/>
                        </div>
                        <input type="text" placeholder={t('translation:forms.labels.phone')} required={true} minLength={9} maxLength={9}
                               ref={inputNumberPhone}/>
                    </div>
                </div>
                <div className={style.blockForInput}>
                    <div className={style.icon} style={{alignItems: "flex-start", padding: " 12px 7px"}}>
                        <FontAwesomeIcon icon={faPen}
                                         className={style.iconStyle}/>
                    </div>
                    <textarea placeholder={t('translation:forms.labels.content')} required={true} ref={inputContent}></textarea>
                </div>
                <ComponentMainButton disabled={blockButton || (captcha.length < 10 && displayReCaptcha)} content={t('translation:allBtns.send')} color="#E5C201" clickEvent={validate}/>
                {displayReCaptcha && <ReCAPTCHA
                    ref={recaptchaRef}
                    sitekey="6Le7CJQpAAAAAGf58WqRrQndYfQib7NTS8GlDoO4"
                    onChange={(event)=>solve(event)}
                    onExpired={()=>setCaptcha('')}
                    badge='inline'
                    required={true}
                />}

            </form>
        </div>
    )
}
export default FormAdvice;
