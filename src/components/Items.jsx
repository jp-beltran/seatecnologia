import { useSelector } from "react-redux";
import IcoItems from "./IcoItem";
import LineItems from "../assets/line_items.svg";

const arrIconItems = [
    { title: "Item 1" },
    { title: "Item 2" },
    { title: "Item 3" },
    { title: "Item 4" },
    { title: "Item 5" },
    { title: "Item 6" },
    { title: "Item 7" },
    { title: "Item 8" },
    { title: "Item 9" },
];

function Items() {
    const currentStep = useSelector((state) => state.steps.currentStep);

    return (
        <div className="flex justify-start items-top p-6 w-full min-h-[200px] bg-white rounded-[20px] mb-8 relative overflow-y-hidden lg:overflow-x-hidden md:overflow-x-scroll">
            <div className="flex flex-row justify-start items-top w-full h-full z-10 relative mt-6">
                {arrIconItems.map((item, index) => (
                    <div
                        key={item.title}
                        className="flex flex-col items-top ml-12"
                    >
                        <IcoItems
                            title={item.title}
                            isConcluded={index < currentStep - 1}
                            isCurrentStep={index === currentStep - 1}
                        />
                        <h2 className="text-[color:var(--Dark,#272F33)] text-center text-md font-medium">
                            {index < currentStep - 1 ? "Concluído" : ""}
                        </h2>
                    </div>
                ))}
            </div>

            <div
                className="flex flex-row justify-start items-top w-full h-full z-0 absolute"
                style={{ top: "-10px" }}
            >
                <img
                    src={LineItems}
                    alt="Linha de itens"
                    className="ml-20 max-w-[1027px] h-auto "
                />
            </div>
        </div>
    );
}

export default Items;
