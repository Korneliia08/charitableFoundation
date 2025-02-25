import style from "./OurPartners.module.css";
import image from "./../../../../assets/images/partners.jpg";
import AllPartnersContainer from "./allPartnersContainer/AllPartnersContainer.jsx";

const OurPartners = () => {


    return (
        <div className={style.container} id="ourPartners">
            <div className={style.wrapper}>
                <div className={style.left}>
                    <img src={image} alt="partners" className={style.imageStyle}/>
                </div>
                <div className={style.right}>
                    <h4 className={style.title}>Партнери <span className={style.blue}>“Могутність Народу” </span>– разом
                        до змін!</h4>
                    <p className={style.describe}>Ваша підтримка – наша сила. Ми безмежно вдячні всім партнерам
                        благодійного
                        фонду “Могутність Народу”, які залишаються поруч і допомагають творити зміни навіть у
                        найскладніші
                        часи.</p>
                </div>
            </div>
            <AllPartnersContainer/>
        </div>
    )
}
export default OurPartners;
