import bgElement from "../assets/bg_element.svg";
import ComingSoon from "../components/ComingSoon"
import Sidebar from "../components/Sidebar";
function Page6() {
    return (  
        <div className="flex flex-row bg-dark-gray w-screen h-screen">
            <Sidebar className="h-full"/>
            <div className="flex flex-col justify-start align-middle items-start w-full px-8 py-6">
               <ComingSoon/>
               <h1>pg6</h1>
               <img src={bgElement} alt="" className="right-0 bottom-0 absolute"/>
            </div>
        </div>
    );
}


export default Page6;