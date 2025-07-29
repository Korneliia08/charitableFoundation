import style from "./DepartmentCommunications.module.scss";
import {useNavigate} from "react-router-dom";
import ScrollToTop from "../../../components/scrollToTop";
import {useSelector} from "react-redux";
import {useTranslation} from "react-i18next";
import imageRight from "./../../../assets/images/department.jpg";
import {Swiper, SwiperSlide} from "swiper/react";

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

    const employees = [
        // {
        //     image: imageRight,
        //     name: "Артем",
        //     description: "Франція",
        // },

    ];

    return (
        <div className="containerForSubPage">
            <ScrollToTop/>
            <div className={style.mainContainer}>
                <div className={style.top}>
                    <div className={style.left}>
                        <h5 className={style.title}>{t('departmentCommunications.title')}</h5>
                        <p className={style.description}>
                            {t('departmentCommunications.description')}
                        </p>
                    </div>
                    <div className={style.right}>
                        <img src={imageRight} alt="imageRight" className={style.imageStyle}/>
                    </div>
                </div>
                {employees?.length > 0 && (
                    <div className={style.blockForPersons}>
                        <h4 className={style.title}>Наші співробітники</h4>
                        <Swiper
                            // modules={[Pagination]}
                            spaceBetween={0}

                            breakpoints={{
                                0: {
                                    slidesPerView: 1,
                                },
                                640: {
                                    slidesPerView: 2,
                                },
                                1050: {
                                    slidesPerView: 3,
                                },
                            }}
                            pagination={{clickable: true}}
                            className={style.persons}

                        >
                            {employees.map((employee, index) => (
                                <SwiperSlide key={index}>
                                    <div className={style.personBlock}>
                                        <img
                                            src={employee.image || imageRight}
                                            alt={employee.name}
                                            className={style.imgPerson}
                                        />
                                        <div className={style.blockLinia}>
                                            <div className={style.circle}></div>
                                        </div>
                                        <h5 className={style.name}>{employee.name}</h5>
                                        <p className={style.description}>{employee.description}</p>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                )}
            </div>
        </div>
    )
}
export default DepartmentCommunications;
