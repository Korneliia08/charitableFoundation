import style from "./QrCode.module.css";
import QRCode from "react-qr-code";
import {useEffect, useState} from "react";

const QrCode = () => {
    const [isClient, setIsClient] = useState(false);
    useEffect(() => {
        setIsClient(true);
    }, []);
    return (
        <div className={style.container}>
            <h4>Мобільна версія:</h4>
            {isClient ?    <QRCode
                size={256}
                className={style.qrCode}
                value={window.location.href}
                fgColor={'#e3c631'}
                bgColor={'rgba(178,181,187,0.03)'}
                viewBox={`0 0 256 256`}
            />:''}
        </div>
    )
}
export default QrCode;
