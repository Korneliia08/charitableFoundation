import style from "./Nav.module.css";

const Nav = () => {
    return (
        <div className={style.container}>
            <a href="#">Головна</a>
            <a href="#">Про нас</a>
            <a href="#">Діяльність</a>
            <a href="#">Наші проекти</a>
            <a href="#">Консультація</a>
            <a href="#">Контакти</a>
        </div>
    )
}
export default Nav;
