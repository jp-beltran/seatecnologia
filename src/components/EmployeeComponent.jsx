import { useDispatch } from "react-redux";
import { Popover, Button } from "antd";
import { deleteEmployee } from "../features/employee/employeeSlice";
import ellipsis from "../assets/ellipsis.svg";
import { toggleFormVisibility } from "../features/formVisibilitySlice/formVisibilitySlice";
import { useNavigate } from "react-router-dom";
import clsx from "clsx";
function EmployeeComponent({ id, name, cpf, isActive, role }) {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleToggleForm = () => {
        dispatch(toggleFormVisibility());
        navigate(`/Page2?id=${id}`);
    };

    const handleDelete = () => {
        dispatch(deleteEmployee(id));
    };

    const content = (
        <div>
            <Button
                type="primary"
                onClick={handleToggleForm}
                style={{ marginBottom: "10px" }}
            >
                Editar
            </Button>
            <Button type="danger" onClick={handleDelete}>
                Excluir
            </Button>
        </div>
    );

    return (
        <div className="flex-row justify-between">
            <div
                className={clsx(
                    "w-full flex flex-row justify-between rounded-[20px]   ",
                    isActive ? "bg-[#649FBF33]" : "bg-[#F2F2F2]"
                )}
            >
                <div className="flex flex-col p-6 gap-3">
                    <h1 className="ml-2">{name}</h1>

                    <div className="flex flex-row gap-3">
                        <h3 className="p-1 px-4 bg-[#649FBF] rounded-[20px] w-auto text-white">
                            {cpf}
                        </h3>
                        <h3 className="p-1 px-4 bg-[#649FBF] rounded-[20px] text-white">
                            {isActive ? "Ativo" : "Inativo"}
                        </h3>
                        <h3 className="p-1 px-4 bg-[#649FBF] rounded-[20px] text-white">
                            Cargo {role}
                        </h3>
                    </div>
                </div>

                <div>
                    <Popover content={content} title="Ações" trigger="click">
                        <button
                            className="bg-[#649FBF] h-full w-15 flex items-center justify-center rounded-r-[20px] cursor-pointer"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <img src={ellipsis} alt="" />
                        </button>
                    </Popover>
                </div>
            </div>
        </div>
    );
}

export default EmployeeComponent;
