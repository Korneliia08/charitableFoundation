import style from "./BlockForLogoAndNav.module.css";
import ComponentForLogoAndTitle from "./ComponentForLogoAndTitle/ComponentForLogoAndTitle";
import Nav from "./Nav/Nav";

const BlockForLogoAndNav = (props) => {
    const belt = props.belt;
    /*  const ref = useRef()
      const [height2, setHeight] = useState()


      useEffect(() => {

          const top = belt ? 35 : 0
          const height = ref.current.clientHeight
          console.log(ref.current);
          const EmptyBlockHeight = Number(top) + Number(height)
          console.log(top, height, EmptyBlockHeight);
          setHeight(EmptyBlockHeight)
      }, [belt]);*/
    return (
        <div>
            <div className={style.emptyBlock}></div>
            <div className={style.blockForLogoAndNav}
                 style={{top: belt ? "35px" : " 0px", padding: belt ? "15px 0" : " 5px 0px"}}>
                <ComponentForLogoAndTitle belt={belt}/>
                <Nav/>
            </div>
        </div>
    )
}
export default BlockForLogoAndNav;
