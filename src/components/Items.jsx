import IcoItem from "./IcoItem";
import LineItems from "../assets/line_items.svg"

const arrIcoItems =[
    {icon: IcoItem, title: "Item 1"},
    {icon: IcoItem, title: "Item 2"},
    {icon: IcoItem, title: "Item 3"},
    {icon: IcoItem, title: "Item 4"},
    {icon: IcoItem, title: "Item 5"},
    {icon: IcoItem, title: "Item 6"},
    {icon: IcoItem, title: "Item 7"},
    {icon: IcoItem, title: "Item 8"},
    {icon: IcoItem, title: "Item 9"},
]

function Items() {
    return (  
        <div className="flex justify-start items-center p-6  w-6/7 h-[156px] bg-white rounded-[20px] mb-8 relative ">
                <div className=" flex flex-row justify-start items-center w-full h-full z-10 absolute " >
                    {arrIcoItems.map((item, index) => (
                        <div key={index} className="flex flex-col items-center ml-12">
                            <item.icon />
                            <h2 className=" text-[color:var(--Dark,#272F33)] text-center  text-md font-medium">Concluído</h2>
                        </div>
                    ))}
                    
                </div>

                <div className="flex flex-row justify-start items-top w-full h-full z-0 absolute -translate-y-6">
                    <img src={LineItems} alt="" className=" ml-20 w-[1027px] "/>
                </div>

 
        </div>
    );
}

export default Items;