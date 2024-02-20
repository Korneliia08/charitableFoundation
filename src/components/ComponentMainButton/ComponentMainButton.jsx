import style from "./ComponentMainButton.module.css";

const ComponentMainButton = (props) => {
    const content = props.content;
    const color = props.color;
    return (
        <button className={style.btnKnowMore} style={{backgroundColor: color}}>
            {content}
            <div className={style.emptyBlock}></div>
        </button>
    )
}
export default ComponentMainButton;
