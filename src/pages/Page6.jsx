import bgElement from "../assets/bg_element.svg";
import ComingSoon from "../components/ComingSoon";
import Footer from "../components/Footer";
import Sidebar from "../components/Sidebar";

function Page6() {
    return (
        <div className="flex flex-row bg-dark-gray w-screen min-h-screen">
            <Sidebar />
            <div className="flex flex-col justify-between items-center w-full px-8 py-6 z-1 flex-grow">
                <ComingSoon />
                <img
                    src={bgElement}
                    alt="Background element"
                    className="right-0 bottom-0 absolute"
                />
                <Footer />
            </div>
        </div>
    );
}

export default Page6;
