import style from "./Header.module.css";
import ComponentForBackgroundImage from "./ComponentForBackgroundImage/ComponentForBackgroundImage";
import {useEffect} from "react";
import axios from "axios";
import {useDispatch, useSelector} from "react-redux";
import {setWebsiteData} from "../../../data/reducers/websiteDataReducer";

const Header = () => {
    const dispatch = useDispatch();
    const dataOfHeader = useSelector(state => state.websiteDates.websiteDates.header);

    useEffect(() => {
        axios('http://10.68.6.106:3000/website-data').then(
            resp => {
                dispatch(setWebsiteData(resp.data));
            }
        ).catch(error => {
            console.log(error);
        })
    }, []);
    console.log(dataOfHeader);
    if (!dataOfHeader) {
        return <h2>Loading....</h2>
    }

    return (
        <div className={style.container}>
            <ComponentForBackgroundImage data={dataOfHeader}/>
        </div>
    )
}//
export default Header;
