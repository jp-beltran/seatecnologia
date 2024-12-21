import bgElement from "../assets/bgElement.svg";
import ComingSoon from "../components/ComingSoon"
import Sidebar from "../components/Sidebar";
function Page5() {
    return (  
        <div className="flex flex-row bg-dark-gray w-screen h-screen">
            <Sidebar/>
            <div className="flex flex-col justify-start align-middle items-center w-full px-8 py-6">
               <ComingSoon/>
               <h1>pg5</h1>
               <img src={bgElement} alt="" className="right-0 bottom-0 absolute"/>
            </div>
        </div>
    );
}


export default Page5;