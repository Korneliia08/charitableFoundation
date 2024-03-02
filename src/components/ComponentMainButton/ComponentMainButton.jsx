import style from "./ComponentMainButton.module.css";

const ComponentMainButton = (props) => {
    const content = props.content;
    const color = props.color;
    const styleClass = props.styleClass;
    const disabled = props.disabled
    return (
        <button disabled={disabled} className={`${style.btnKnowMore} ${styleClass}`} style={{backgroundColor: color}}
                onClick={props.clickEvent}>
            {content}
            <div className={style.emptyBlock}></div>
        </button>
    )
}
export default ComponentMainButton;
