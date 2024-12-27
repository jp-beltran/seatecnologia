import back_arrow from "../assets/back_arrow.svg";
import { useDispatch } from "react-redux";
import { toggleFormVisibility } from "../features/formVisibilitySlice/formVisibilitySlice";

function Header({ title, showBackButton = true }) {
    const dispatch = useDispatch();

    const handleToggleForm = () => {
        dispatch(toggleFormVisibility());
    };

    return (
        <header className="bg-[#4FA1C1] w-full h-14 flex justify-start items-center rounded-t-3xl px-6 py-3 gap-4">
            {showBackButton && (
                <button
                    onClick={handleToggleForm}
                    style={{
                        background: "none",
                        border: "none",
                        cursor: "pointer",
                    }}
                >
                    <img
                        src={back_arrow}
                        alt="Voltar"
                        style={{ width: "24px", height: "24px" }}
                    />
                </button>
            )}
            <h1 className="text-3xl text-white">{title}</h1>
        </header>
    );
}

export default Header;
