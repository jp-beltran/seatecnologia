import { Form, Button } from "antd";
import EmployeeComponent from "./EmployeeComponent";
import AddEmployeeForm from "./AddEmployeeForm";
import Header from "./Header";
import { useState } from "react";
import { useForm } from "antd/es/form/Form";

function EmployeesForm() {
    const { register } = useForm();
    const [cpf, setCpf] = useState("");

    return (
        <div className="w-full bg-white rounded-3xl">
            <Header title="Funcionários" />

            <div className="flex flex-col p-6 w-ful flex">
                <Form className="flex flex-col gap-3 w-full">
                    <Form.Item>
                        <Button className="w-full">
                            + Adicionar Funcionário
                        </Button>
                    </Form.Item>

                    <div className="w-full flex flex-col">
                        <div className="flex items-center justify-between">
                            <div className="flex gap-5">
                                <Button>Ver apenas ativos</Button>
                                <Button>Limpar Filtros</Button>
                            </div>
                            <h2>Ativos 2/4</h2>
                        </div>
                    </div>

                    <EmployeeComponent />
                    <EmployeeComponent />
                    <EmployeeComponent />
                    <EmployeeComponent />
                </Form>
            </div>
        </div>
    );
}

export default EmployeesForm;
