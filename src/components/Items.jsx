import IcoItem from "./IcoItem";
import LineItems from "../assets/lineItems.svg"

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
        <div className="flex justify-start items-center p-6  w-full h-[156px] bg-white rounded-[20px] mb-8 relative">
                <div className=" flex flex-row justify-start items-center w-full h-full z-10 absolute ml-17" >
                    {arrIcoItems.map((item, index) => (
                        <div key={index} className="flex items-center ml-12">
                            <item.icon />
                        </div>
                    ))}
                    
                </div>

                <div className="flex flex-row justify-start items-top w-full h-full z-0 absolute">
                    <img src={LineItems} alt="" className="ml-31 w-[1090px]"/>
                </div>

 
        </div>
    );
}

export default Items;