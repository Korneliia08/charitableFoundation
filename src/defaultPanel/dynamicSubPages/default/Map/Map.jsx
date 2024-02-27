import style from "./Map.module.css";
import {MapContainer, Marker, Popup, TileLayer} from "react-leaflet";
import {useSelector} from "react-redux";

const Map = () => {
    const data = useSelector(state => state.websiteDates.websiteDates.footer?.map);
    if (!data) {
        return <h4>Loading....</h4>;
    }
    return (
        <div className={style.container}>
            <h2>Як Нас знайти?</h2>
            <MapContainer className={style.map} center={[data.altitude, data.longitude]} zoom={15}
                          scrollWheelZoom={false}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={[data.altitude, data.longitude]}>
                    <Popup>
                        Наша адреса
                    </Popup>
                </Marker>
            </MapContainer>
        </div>
    )
}
export default Map;
