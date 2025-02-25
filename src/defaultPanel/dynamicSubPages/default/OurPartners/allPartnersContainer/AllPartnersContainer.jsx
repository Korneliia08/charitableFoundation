import style from "./AllPartnersContainer.module.css";
import PartnerCard from "./PartnerCard/PartnerCard.jsx";
//import {TbHeartHandshake} from "react-icons/tb";

const AllPartnersContainer = () => {
    return (
        <div className={style.containerForBlocks}>
            <PartnerCard/>
        </div>
    )
}
export default AllPartnersContainer;
