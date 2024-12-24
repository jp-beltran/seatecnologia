import IcoItem from "./IcoItem";
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
    const step = 4;

    return (
        <div className="flex justify-start items-center p-6  w-full h-[156px] bg-white rounded-[20px] mb-8 relative ">
            <div className=" flex flex-row justify-start w-full h-full z-10 absolute mt-6">
                {arrIconItems.map((item, index) => (
                    <div
                        key={item.title}
                        className="flex flex-col items-center ml-12"
                    >
                        <IcoItem title={item.title} />
                        <h2 className=" text-[color:var(--Dark,#272F33)] text-center  text-md font-medium">
                            {index < step - 1 ? "Concluído" : ""}
                        </h2>
                    </div>
                ))}
            </div>

            <div className="flex flex-row justify-start items-top w-full h-full z-0 absolute -translate-y-7">
                <img src={LineItems} alt="" className=" ml-20 w-[1027px] " />
            </div>
        </div>
    );
}

export default Items;
