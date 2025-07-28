import style from "./DepartmentCommunications.module.scss";
import ArrowBack from "../../../components/ArrowBack/ArrowBack";
import {useNavigate} from "react-router-dom";
import ScrollToTop from "../../../components/scrollToTop";
import {useSelector} from "react-redux";
import {useTranslation} from "react-i18next";
import imageRight from "./../../../assets/images/department.jpg";

const DepartmentCommunications = () => {
    const navigate = useNavigate();
    const data = useSelector(state => state.websiteDates.websiteDates?.takeAdonat);
    const [t] = useTranslation();
    if (!data) {
        return "";
    }

    function displayOneStepAgo() {
        navigate(-1);
    }

    return (
        <div className="containerForSubPage">
            <ScrollToTop/>
            <div className={style.mainContainer}>
                <div className={style.top}>
                    <div className={style.left}>
                        <h5 className={style.title}>Відділ комунікацій та медіа Фонду</h5>
                        <p className={style.description}>
                            Розповсюдження інформації в Україні і в світі про діяльність Фонду, потреби українських
                            ветеранів та постраждалих від російської агресії в Україні. Залучення журналістів, блогерів,
                            волонтерів до поширення правдивої інформації про російсько-українську війну, її причини, хід
                            та
                            наслідки.
                        </p>
                    </div>
                    <div className={style.right}>
                        <img src={imageRight} alt="imageRight" className={style.imageStyle}/>
                    </div>
                </div>
                {/*<div className={style.blockForPersons}>*/}
                {/*    <h4 className={style.title}>Наші співробітники</h4>*/}
                {/*    <div className={style.persons}>*/}
                {/*        <div className={style.personBlock}>*/}
                {/*            <img src={imageRight} alt="person" className={style.imgPerson}/>*/}
                {/*            <div className={style.blockLinia}>*/}
                {/*                <div className={style.circle}></div>*/}
                {/*            </div>*/}
                {/*            <h5 className={style.name}>Ігор Іванович</h5>*/}
                {/*            <p className={style.description}>Співзасновник благодійного фонду ітд ітп</p>*/}
                {/*        </div>*/}
                {/*        <div className={style.personBlock}>*/}
                {/*            <img src={imageRight} alt="person" className={style.imgPerson}/>*/}
                {/*            <div className={style.blockLinia}>*/}
                {/*                <div className={style.circle}></div>*/}
                {/*            </div>*/}
                {/*            <h5 className={style.name}>Ігор Іванович</h5>*/}
                {/*            <p className={style.description}>Співзасновник благодійного фонду ітд ітп</p>*/}
                {/*        </div>*/}
                {/*        <div className={style.personBlock}>*/}
                {/*            <img src={imageRight} alt="person" className={style.imgPerson}/>*/}
                {/*            <div className={style.blockLinia}>*/}
                {/*                <div className={style.circle}></div>*/}
                {/*            </div>*/}
                {/*            <h5 className={style.name}>Ігор Іванович</h5>*/}
                {/*            <p className={style.description}>Співзасновник благодійного фонду ітд ітп</p>*/}
                {/*        </div>*/}
                {/*    </div>*/}
                {/*</div>*/}
            </div>
            <ArrowBack onClickEvent={displayOneStepAgo} className={style.arrow}/>
        </div>
    )
}
export default DepartmentCommunications;
