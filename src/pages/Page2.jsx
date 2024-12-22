import bgElement from "../assets/bg_element.svg";
import Sidebar from "../components/Sidebar";
import Items from "../components/Items";
import EmployeeDetails from "../components/EmployeeDetails";
import EmployeeForm  from "../components/AddEmployeeForm";

function Page2() {
    return (
        <div className="flex flex-row bg-dark-gray h-[150vh]">
            <Sidebar className="h-2/3/" />
            <div className="flex flex-col justify-start align-middle items-start w-full px-8 py-6">
                <Items />
                <div className="flex flex-row gap-8 w-full">
                    <EmployeeDetails />
                    <EmployeeForm/>
                </div>
            </div>

                <img src={bgElement} alt="" className="right-0 bottom-0 absolute" />

        </div>
    );
}

export default Page2;
