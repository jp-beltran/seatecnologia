import { Button } from "antd";
import EmployeeComponent from "./EmployeeComponent";
import Header from "./Header";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleFormVisibility } from "../features/formVisibilitySlice/formVisibilitySlice";

import {
    fetchEmployees,
    setEmployees,
} from "../features/employee/employeeSlice";
import {
    toggleActiveFilter,
    clearFilter,
} from "../features/filterSlice/filterSlice";
import { useSearchParams } from "react-router-dom";

function EmployeesForm() {
    const dispatch = useDispatch();
    const [searchParams, setSearchParams] = useSearchParams();
    const employees = useSelector((state) => state.employees.employees);
    const employeesStatus = useSelector((state) => state.employees.status);
    const showOnlyActive = useSelector((state) => state.filter.showOnlyActive);

    useEffect(() => {
        setSearchParams(() => ({}));
    }, []);

    useEffect(() => {
        const fetchEmployeeData = async () => {
            if (employeesStatus === "idle") {
                const resultAction = await dispatch(fetchEmployees());
                if (fetchEmployees.fulfilled.match(resultAction)) {
                    dispatch(setEmployees(resultAction.payload));
                }
            }
        };
        fetchEmployeeData();
    }, [employeesStatus, dispatch]);

    useEffect(() => {
        console.log("Employees Status:", employeesStatus);
        console.log("Employees:", employees);
    }, [employeesStatus, employees]);

    const handleToggleForm = () => {
        dispatch(toggleFormVisibility());
    };

    const handleToggleActiveFilter = () => {
        dispatch(toggleActiveFilter());
    };

    const handleClearFilters = () => {
        dispatch(clearFilter());
    };

    const filteredEmployees = showOnlyActive
        ? employees.filter((employee) => employee.isActive)
        : employees;

    return (
        <div className="w-full bg-white rounded-3xl">
            <Header title="Funcionários" showBackButton={false} />

            <div className="flex flex-col p-6 w-full flex">
                <div className="flex flex-col gap-3 w-full">
                    <div>
                        <Button
                            className="w-full min-h-[66px]"
                            onClick={handleToggleForm}
                        >
                            + Adicionar Funcionário
                        </Button>
                    </div>

                    <div className="w-full flex flex-col">
                        <div className="flex items-center justify-between">
                            <div className="flex gap-5">
                                <Button
                                    onClick={handleToggleActiveFilter}
                                    style={{
                                        width: "192px",
                                    }}
                                >
                                    Ver apenas ativos
                                </Button>
                                <Button
                                    disabled={!showOnlyActive}
                                    onClick={handleClearFilters}
                                    style={{
                                        width: "192px",
                                    }}
                                >
                                    Limpar Filtros
                                </Button>
                            </div>
                            <h2>
                                Ativos{" "}
                                {
                                    filteredEmployees.filter(
                                        (emp) => emp.isActive
                                    ).length
                                }
                                /{filteredEmployees.length}
                            </h2>
                        </div>
                    </div>

                    {filteredEmployees.length > 0 ? (
                        filteredEmployees.map((employee) => (
                            <EmployeeComponent
                                key={employee.id}
                                {...employee}
                            />
                        ))
                    ) : (
                        <p>Nenhum funcionário encontrado.</p>
                    )}
                </div>
            </div>
        </div>
    );
}

export default EmployeesForm;
