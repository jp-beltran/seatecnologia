import { Button } from "antd";
import { useDispatch } from "react-redux";
import { nextStep } from "../features/stepSlice/stepSlice"; //

function Footer() {
    const dispatch = useDispatch();

    const handleNextStep = () => {
        dispatch(nextStep());
    };

    return (
        <footer className="w-full flex flex-row-reverse mt-8">
            <Button
                className="w-[194px] radius-[10px]"
                style={{
                    backgroundColor: "#649FBF",
                    color: "white",
                    fontWeight: "700",
                }}
                onClick={handleNextStep}
            >
                Próximo Passo
            </Button>
        </footer>
    );
}

export default Footer;
