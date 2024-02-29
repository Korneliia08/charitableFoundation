import Footer from "./staticComponents/Footer/Footer";
import ArrowToTop from "../components/ArrowToTop/ArrowToTop";
import {Outlet, useNavigate} from "react-router-dom";
import BlockForLogoAndNav from "./staticComponents/Header/BlockForLogoAndNav/BlockForLogoAndNav";
import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import axios from "axios";
import {setAspects} from "../data/reducers/aspectReducer";
import BeltForContact from "./staticComponents/Header/BeltForContact/BeltForContact";
import {setWebsiteData} from "../data/reducers/websiteDataReducer";
import {setProjects} from "../data/reducers/projectReducer";

const DefaultPanel = () => {
    const navigate = useNavigate();
    const dataOfHeader = useSelector(state => state.websiteDates.websiteDates.header);

    const [belt, setBelt] = useState(true);

    function checkY() {

        if (window.pageYOffset > 15) {
            setBelt(false);
            return;
        }
        setBelt(true);

    }

    const dispatch = useDispatch();
    useEffect(() => {
        axios(process.env.REACT_APP_LINKTOAPI + 'aspects').then(
            resp => {
                dispatch(setAspects(resp.data));
            }
        ).catch(error => {
            navigate('/error');
        })
        axios(process.env.REACT_APP_LINKTOAPI + 'website-data').then(
            resp => {
                dispatch(setWebsiteData(resp.data));
            }
        ).catch(error => {
            navigate('/error');
        })

        axios(process.env.REACT_APP_LINKTOAPI + 'projects').then(
            resp => {
                dispatch(setProjects(resp.data));
            }
        ).catch(error => {
            navigate('/error');
        });
        let sessionId = 0;
        const link = process.env.REACT_APP_LINKTOAPI + 'visits'


        const pinger = setInterval(() => {

            function generateMd5() {
                const date =
                    new Date().getHours() +
                    '*' +
                    new Date().getMinutes() +
                    '*' +
                    (Number(new Date().getSeconds()));
                const value = `${date}` //^${link}
                var md5 = require('md5');
                return md5(value)
            }

            console.log("test:", sessionId)
            axios(link, {params: {code: generateMd5(), id: sessionId}}).then(data => {

                if (data.data.id) {
                    console.log(data.data.id);
                    sessionId = data.data.id;
                }
            }).catch(error => {
                console.warn('Pinger error')
            });
        }, 3000)
        return () => {
            clearInterval(pinger)
        }

    }, []);

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
}
export default DefaultPanel;
