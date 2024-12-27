import Sidebar from "../components/Sidebar";
import { useSelector } from "react-redux";
import Items from "../components/Items";
import EmployeeDetails from "../components/EmployeeDetails";
import AddEmployeeForm from "../components/AddEmployeeForm";
import EmployeesForm from "../components/EmployeesForm";
import Footer from "../components/Footer";
import ComingSoon from "../components/ComingSoon";

function Page2() {
    const showAddEmployeeForm = useSelector(
        (state) => state.formVisibility.showAddEmployeeForm
    );
    const currentStep = useSelector((state) => state.steps.currentStep);

    return (
        <div className="flex flex-col min-h-screen bg-dark-gray pb-10 pr-1">
            <div className="flex flex-row flex-grow">
                <Sidebar />
                <div className="flex flex-col justify-start items-center w-full px-8 py-6 z-1 flex-grow">
                    <Items />

                    <div className="flex flex-col gap-8 w-full sm:flex-row">
                        {currentStep > 1 ? (
                            <ComingSoon />
                        ) : (
                            <>
                                <EmployeeDetails />
                                {showAddEmployeeForm ? (
                                    <EmployeesForm />
                                ) : (
                                    <AddEmployeeForm />
                                )}
                            </>
                        )}
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Page2;
