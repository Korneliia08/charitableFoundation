import {Route, Routes} from "react-router-dom";
import ChoosedProject from "./defaultPanel/dynamicSubPages/ChoosedProject/ChoosedProject.jsx";
import Details from "./defaultPanel/dynamicSubPages/Details/Details.jsx";
import DefaultPanel from "./defaultPanel/defaultPanel.jsx";
import Default from "./defaultPanel/dynamicSubPages/default/Default.jsx";
import AboutUsFully from "./defaultPanel/dynamicSubPages/AboutUsFully/AboutUsFully.jsx";
import AspectsOfTheProject from "./defaultPanel/dynamicSubPages/default/AspectsOfTheProject/AspectsOfTheProject.jsx";
import OurProjects from "./defaultPanel/dynamicSubPages/default/OurProjects/OurProjects.jsx";
import ChoosedAspect from "./defaultPanel/dynamicSubPages/ChoosedAspect/ChoosedAspect.jsx";
import Donat from "./defaultPanel/dynamicSubPages/Donat/Donat.jsx";
import ErrorComponent from "./components/ErrorComponent/ErrorComponent.jsx";
import Error404Component from "./components/Error404Component/Error404Component.jsx";

export const Router = () => {
    return (
        <Routes basepatch={'/'}>
            <Route path="/" element={<DefaultPanel/>}>
                <Route path="/" element={<Default/>}/>
                <Route path="/aboutUs" element={<AboutUsFully/>}/>
                <Route path="/aspects" element={<AspectsOfTheProject allAspects={true}/>}/>
                <Route path="/projects" element={<OurProjects allProjects={true}/>}/>
                <Route path="/aspect/:id" element={<ChoosedAspect/>}/>
                <Route path="/project/:id" element={<ChoosedProject/>}/>
                <Route path="/partner" element={<ChoosedProject/>}/>
                <Route path="/details" element={<Details/>}/>
                <Route path="/donat" element={<Donat/>}/>
            </Route>

            <Route path="/error" element={<ErrorComponent/>}/>
            <Route path="*" element={<Error404Component/>}/>
        </Routes>
    )
}
