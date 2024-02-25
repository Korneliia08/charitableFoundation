import {useNavigate, useParams} from "react-router-dom";
import style from "./ChoosedAspect.module.css";
import imageTeg from "../../../assets/images/aboutUs.png";
import ArrowBack from "../../../components/ArrowBack/ArrowBack";
import {useEffect, useState} from "react";
import axios from "axios";
import ComponentMainButton from "../../../components/ComponentMainButton/ComponentMainButton";

const ChoosedAspect = (props) => {
    const navigate = useNavigate();
    const [data, setData] = useState();
    const {id} = useParams();

    function displayOneStepAgo() {
        navigate("/");
    }

    useEffect(() => {
        axios('http://10.68.6.106:3000/activities/' + id).then(
            resp => {
                setData(resp.data);
            }
        ).catch(err => {
            console.log(err);
        });
    }, [id]);
    if (!data) {
        return <h2>Loading....</h2>
    }

    return (
        <>
            <div className={style.backgroundWithTitle}>
                <h2>{data.title}</h2>
            </div>
            <div className="containerForSubPage withImage">
                <ArrowBack top={'-29px'} onClickEvent={displayOneStepAgo}/>
                <div className={style.container}>
                    <div className={style.containerForContentAndBtn}>
                        <p>{data.content}</p>
                        <div className={style.blockForBtn}>
                            <ComponentMainButton content="Долучитися до пожертви" color="#F3CE03"/>
                        </div>
                    </div>
                    <img src={imageTeg} alt="imageTeg"/>
                </div>
            </div>
        </>
    )
}
export default ChoosedAspect;
