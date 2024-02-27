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
        axios(process.env.REACT_APP_LINKTOAPI + 'activities').then(
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
