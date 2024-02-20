import style from "./Content.module.css";
import ComponentMainButton from "../../../../components/ComponentMainButton/ComponentMainButton";

const Content = () => {
    return (
        <div className={style.container}>
            <h2>ПРО БЛАГОДІЙНИЙ ФОНД</h2>
            <p>«Наша місія — домогтися якісних змін у житті людей, а це можливо тільки при повному зануренні в тему і
                системній роботі. Працюючи в суспільстві у напрямах допомоги ЗСУ, інноваційної освіти, соціалізації, ми
                інвестуємо в здорове, гармонійне та свідоме майбутнє покоління. Ми будемо намагатися й надалі
                масштабувати позитивні практики та робити ці зміни на рівні держави та міжнародного досвіду. Для цього і
                була створена наша благодійна організація»
                Головні види діяльності:

                надання допомоги ЗСУ, іншим військовим формуванням, правоохоронним органам, органам цивільного захисту,
                добровольчим формуванням, територіальним громадам, іншим особам, які забезпечують національну безпеку і
                оборону (транспортними засобами, індивідуальними засобам безпеки, засобами активного захисту, амуніцією
                та іншим необхідним спорядженням і обладнанням);
                сприяння у поліпшенню медичного обслуговування та медикаментозного забезпечення учасників бойових дій;
                організація документування та оцінки збитків, допомога з тимчасовим консервуванням та відновленням
                житла.</p>
            <ComponentMainButton content="Детальніше" color="#FFD801"/>
        </div>
    )
}
export default Content;
