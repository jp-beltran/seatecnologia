import bgElement from "../assets/bgElement.svg";
import ComingSoon from "../components/ComingSoon"
import Sidebar from "../components/Sidebar";
import Items from "../components/Items";
function Page2() {
    return (  
        <div className="flex flex-row bg-dark-gray w-screen h-screen">
            <Sidebar/>
            <div className="flex flex-col justify-start align-middle items-center w-full px-8 py-6">
                <Items/>
               <ComingSoon/>
               <h1>pg2</h1>
               <img src={bgElement} alt="" className="right-0 bottom-0 absolute"/>
            </div>
        </div>
    );
}


export default Page2;