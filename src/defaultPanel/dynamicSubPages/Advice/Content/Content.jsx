import style from "./Content.module.css";

const Content = () => {
    return (
        <div className={style.container}>
            <h3>Для отримання консультації заповніть цю форму:</h3>
            <p>Ми проконсультуємо Вас з усіх питань, що
                Вас цікавлять та допоможемо розібратись
                у Вашій справі</p>
        </div>
    )
}
export default Content;
