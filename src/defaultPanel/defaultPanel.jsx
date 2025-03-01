import Footer from "./staticComponents/Footer/Footer";
import ArrowToTop from "../components/ArrowToTop/ArrowToTop";
import {Outlet, useNavigate} from "react-router-dom";
import BlockForLogoAndNav from "./staticComponents/Header/BlockForLogoAndNav/BlockForLogoAndNav";
import {useContext, useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import axios from "axios";
import {setAspects} from "../data/reducers/aspectReducer";
import BeltForContact from "./staticComponents/Header/BeltForContact/BeltForContact";
import {setLanguage, setWebsiteData} from "../data/reducers/websiteDataReducer";
import {setProjects} from "../data/reducers/projectReducer";
import UserContext from "../serverContext.js";
import md5 from "md5";
import {useTranslation} from "react-i18next";
const DefaultPanel = () => {
    const navigate = useNavigate();
    const dataOfHeader = useSelector(state => state.websiteDates.websiteDates.header);
    const [t, i18n] = useTranslation()
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(setLanguage(i18n.language));
    }, [i18n.language]);
    const [belt, setBelt] = useState(true);

    function checkY() {

        if (window.pageYOffset > 15) {
            setBelt(false);
            return;
        }
        setBelt(true);

    }
    useEffect(() => {
        const language = ['ua', 'en'].includes(i18n.language) ? i18n.language : 'ua';

        axios(import.meta.env.VITE_APP_LINKTOAPI + 'aspects/translation/' + language)
            .then(resp => {
                dispatch(setAspects(resp.data));
            })
            .catch(error => {
                navigate('/error');
            });

        axios(import.meta.env.VITE_APP_LINKTOAPI + 'website-data/translation/' + language)
            .then(resp => {
                dispatch(setWebsiteData(resp.data));
            })
            .catch(error => {
                navigate('/error');
            });

        axios(import.meta.env.VITE_APP_LINKTOAPI + 'projects/translation/' + language)
            .then(resp => {
                dispatch(setProjects(resp.data));
            })
            .catch(error => {
                navigate('/error');
            });

    },[i18n.language])

    useEffect(() => {



        pingerFun()
        const pinger = setInterval(() => {
            pingerFun()
        }, 10000)
        return () => {
            clearInterval(pinger)
        }

    }, []);

    function pingerFun() {

        if (!localStorage.getItem("sessionId")) {
            localStorage.setItem("sessionId", 0);
        }
        if (document.hidden) {
            //   console.warn('Window is inactive');
            return;
        }
        if (document.visibilityState === 'hidden') {
            // console.warn('Window is hidden');
            return;
        }
        const link = import.meta.env.VITE_APP_LINKTOAPI + 'visits'
        axios(link, {params: {code: generateMd5(), id: localStorage.getItem("sessionId")}}).then(data => {
            if (data.data.id) {
                localStorage.setItem("sessionId", data.data.id);
            }
        }).catch(error => {
        });
    }

    useEffect(() => {
        document.addEventListener("scroll", checkY);
        return () => {
            document.removeEventListener("scroll", checkY);
        }
    }, []);

    return (
        <div className="flexibleBlock">

            {dataOfHeader && <BeltForContact data={dataOfHeader.blockOfBelt}/>}
            <BlockForLogoAndNav belt={belt}/>
           <Outlet/>
             <Footer/>
            <ArrowToTop/>
        </div>
    )


    function generateMd5() {
        const date =
            new Date().getHours() +
            '*' +
            new Date().getMinutes() +
            '*' +
            (Number(new Date().getSeconds()));
        const value = `${date}` //^${link}
      //  var md5 = require('md5');
        return md5(value)
    }

}
export default DefaultPanel;
