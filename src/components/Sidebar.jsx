import Square from "../components/Square";
import Ico1 from "../assets/icons/ico1.svg";
import Ico2 from "../assets/icons/ico2.svg";
import Ico3 from "../assets/icons/ico3.svg";
import Ico4 from "../assets/icons/ico4.svg";
import Ico5 from "../assets/icons/ico5.svg";
import Ico6 from "../assets/icons/ico6.svg";
import { Link } from "react-router-dom";

const navItems = [
    { icon: Ico1, href: "/" },
    { icon: Ico2, href: "/Page2" },
    { icon: Ico3, href: "/Page3" },
    { icon: Ico4, href: "/Page4" },
    { icon: Ico5, href: "/Page5" },
    { icon: Ico6, href: "/Page6" },
];

function Sidebar({ className }) {
    return (
        <div
            className={`flex flex-col bg-[#4FA1C1] items-center rounded-r-3xl  ${className} min-h-screen`}
        >
            <Square />
            <nav className="flex flex-col justify-top mt-[168px]  h-full w-full gap-6 mt-12">
                {navItems.map((item, index) => (
                    <Link
                        key={index}
                        to={item.href}
                        className="flex items-center justify-center w-full hover:border-l-4 hover:border-white"
                    >
                        <img
                            src={item.icon}
                            alt={`icon ${index + 1}`}
                            className="w-3.2 h-3.2"
                        />
                    </Link>
                ))}
            </nav>
        </div>
    );
}

export default Sidebar;
