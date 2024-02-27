import style from "./Donat.module.css";
import ArrowBack from "../../../components/ArrowBack/ArrowBack";
import {useNavigate} from "react-router-dom";
import {faGem} from "@fortawesome/free-regular-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import ScrollToTop from "../../../components/scrollToTop";

const Donat = () => {
    const navigate = useNavigate();

    function displayOneStepAgo() {
        navigate("/");
    }

    return (
        <div className="containerForSubPage">
            <ScrollToTop/>
            <div className={style.mainContainer}>
                <div className={style.blockForTitleAndOther}>
                    <h4>БЛАГОДІЙНИЙ ФОНД - МОГУТНІСТЬ НАРОДУ</h4>
                    <div className={style.blockForDiamond}><FontAwesomeIcon icon={faGem} className={style.diamondIcon}/>
                    </div>
                    <div className={style.blockForHowMoney}>
                        <span className={style.mainSpan}>Зібрано:</span>
                        <span>400 $</span>
                    </div>
                </div>
                <div className={style.blockForOnlineDonat}>
                    <h5>пожертвувати онлайн</h5>
                    <button>Долучитися до пожертвування</button>
                    <p>Війна - це випробування, яке перевертає життя зсередини назовні. Інваліди-воїни відчувають це на
                        собі кожен день, борючись зі своїми обмеженнями та відновлюючи свої сили. Вони є живими
                        прикладами того, як навіть у найважчі моменти людина може піднятися і здобути перемогу. Історії
                        інвалідів-воїнів повні надії та відданості. Вони не лише пройшли через вогонь та біль війни, але
                        й знайшли в собі силу продовжувати свій шлях. Для багатьох з них війна стала важким
                        випробуванням, але вони вирішили не здаватися, а продовжувати боротьбу за краще завтра. Кожна
                        історія інваліда-воїна унікальна та неповторна, але вони всі об&#39;єднуються загальним духом
                        сили та відданості. Ці воїни не лише воювали на полі бою, вони продовжують воювати щодня - зі
                        своїми обмеженнями, зі своїми труднощами, зі своїми мріями. Їхні історії - це приклад того, як
                        навіть у найскладніші часи можна знайти силу та волю до перемоги. Їхні досягнення надихають та
                        підтримують не лише інших інвалідів-воїнів, а й усю нашу спільноту. Нехай ці історії стануть для
                        нас уроком мужності та відданості, нехай вони нагадають нам про те, що справжня сила починається
                        в серці.</p>
                </div>
            </div>
            <ArrowBack onClickEvent={displayOneStepAgo}/>
        </div>
    )
}
export default Donat;
