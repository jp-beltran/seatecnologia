import ico_items_concluded from "../assets/ico_item_concluded.svg";
import ico_items_unconcluded from "../assets/ico_item_unconcluded.svg";

function IcoItems({ title, isConcluded, isCurrentStep }) {
    return (
        <div className="flex flex-col justify-center items-center m-2">
            <img
                src={
                    isConcluded || isCurrentStep
                        ? ico_items_concluded
                        : ico_items_unconcluded
                }
                alt="Ícone de item"
                style={{
                    filter: "drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))",
                    border: isCurrentStep ? "2px solid black" : "none",
                }}
                className="min-w-16 min-h-16 rounded-3xl mb-2"
            />
            <h1 className="text-[#4FA1C1] text-sm font-medium">{title}</h1>
        </div>
    );
}

export default IcoItems;
