import style from "./Detail.module.css";

const Detail = () => {
    return (
        <p className={style.content}>
            BANKING INFORMATION TO MAKE WIRE TRANSFER IN EUR
            (БАНКІВСЬКІ РЕКВІЗИТИ ДЛЯ ЗДІЙСНЕННЯ ПЕРЕКАЗУ В ЄВРО)
            INTERMEDIARY BANK: COMMERZBANK AG.
            (БАНК-ПОСЕРЕДНИК) FRANKFURT AM MAIN, GERMANY
            SWIFT: COBADEFF
            BENEFICIARY BANK: KREDOBANK
            (БАНК ОТРИМУВАЧА) LVIV, UKRAINE
            ACC. 400888100500
            SWIFT: WUCB UA 2X

            BENEFICIARY: JSC ‘IDEA BANK’
            (ОТРИМУВАЧ) LVIV, UKRAINE
            IBAN. UA923253650000000000016004002
            SWIFT: IDBA UA UK

            PAYMENT DETAILS: FOR _____
            ACCOUNT (IBAN) UA6333631026003001001009521
            _____________
            (ДЕТАЛІ ПЛА-ЖУ) CONTRACT N _______________
        </p>
    )
}
export default Detail;
