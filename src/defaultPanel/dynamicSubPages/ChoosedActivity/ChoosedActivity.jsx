import {useNavigate, useParams} from "react-router-dom";
import style from "./ChoosedActivity.module.css";
import imageTeg from "../../../assets/images/aboutUs.png";
import ArrowBack from "../../../components/ArrowBack/ArrowBack";

const ChoosedActivity = (props) => {
    const navigate = useNavigate();
    const {id} = useParams();

    function displayOneStepAgo() {
        navigate("/");
    }

    return (
        <>
            <div className={style.backgroundWithTitle}>
                <h2>sssssssss</h2>
            </div>
            <div className="containerForSubPage withImage">
                <ArrowBack top={'-29px'} onClickEvent={displayOneStepAgo}/>
                <div className={style.container}>
                    <div className={style.containerForContentAndBtn}>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum ea eaque porro quia quod?
                            At
                            blanditiis, commodi deleniti dicta dolorum ex incidunt iure minus officia omnis perferendis
                            ratione,
                            sed soluta ullam, vitae! Alias aliquid commodi dignissimos distinctio excepturi, incidunt
                            ipsum
                            nemo
                            perspiciatis provident quaerat, quas quidem quisquam quos reprehenderit soluta veritatis
                            voluptas?
                            Ab architecto aut error eveniet harum id ipsam? Ab accusantium at culpa dolorem eaque earum
                            et
                            expedita fugit incidunt ipsam iste itaque laudantium magnam modi molestiae mollitia nesciunt
                            nisi
                            nulla odit perspiciatis quas qui quisquam ratione reiciendis rem repellat, repellendus rerum
                            sed
                            totam veniam vero vitae voluptatem voluptatibus?</p>
                        <div className={style.blockForBtn}>
                            <button>Долучитися до пожертви</button>
                        </div>
                    </div>
                    <img src={imageTeg} alt="imageTeg"/>
                </div>
            </div>
        </>
    )
}
export default ChoosedActivity;
