import style from "./Detail.module.css";

const Detail = (props) => {
    const data = props.data;
    return (
        <p className={style.content}>
            {data}
        </p>
    )
}
export default Detail;
