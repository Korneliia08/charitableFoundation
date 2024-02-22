import style from "./QrCode.module.css";
import QRCode from "react-qr-code";

const QrCode = () => {

    return (
        <div className={style.container}>
            <h4>Мобільна версія:</h4>
            <QRCode
                size={256}
                style={{height: "auto", maxWidth: "100%", width: "60%"}}
                value={window.location.href}
                fgColor={'#e3c631'}
                bgColor={'rgba(178,181,187,0.03)'}
                viewBox={`0 0 256 256`}
            />
        </div>
    )
}
export default QrCode;
