import style from "./BlockForLogoAndNav.module.css";
import ComponentForLogoAndTitle from "./ComponentForLogoAndTitle/ComponentForLogoAndTitle";
import Nav from "./Nav/Nav";
import {useRef, useState} from "react";

const BlockForLogoAndNav = (props) => {
    const belt = props.belt;
    const ref = useRef()
    const [heightBlock, setHeightBlock] = useState(45)
    /*
        useEffect(() => {
            const interval = setInterval(() => {

                const height = ref.current.clientHeight
                setHeightBlock(height);
                console.log(ref.current);
            }, 1000)
            return () => {
                clearInterval(interval)
            }
        }, [belt]);*/
    return (
        <div>
            <div className={style.emptyBlock}></div>
            <div className={style.blockForLogoAndNav}
                 style={{padding: belt ? "15px 0" : " 5px 0px"}}>
                <ComponentForLogoAndTitle belt={belt}/>
                <Nav/>
            </div>
        </div>
    )
}
export default BlockForLogoAndNav;
