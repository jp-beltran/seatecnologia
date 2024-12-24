import back_arrow from "../assets/back_arrow.svg";
function Header({ title }) {
    return (
        <header className="bg-[#4FA1C1] w-full h-14 flex justify-start items-center rounded-t-3xl px-6 py-3 gap-4">
            <img src={back_arrow} alt="Voltar" />
            <h1 className="text-3xl text-white">{title}</h1>
        </header>
    );
}

export default Header;
