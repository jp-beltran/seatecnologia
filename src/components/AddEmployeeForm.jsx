import { ConfigProvider, Form, Button } from "antd";
import { useSelector, useDispatch } from "react-redux";
import IsActive from "./IsActive";
import EpiForm from "./EpiForm";
import EmployeeDetailsForm from "./EmployeeDetailsForm";
import MedicalCertificate from "./MedicalCertificate";
import Header from "./Header";
import { addEmployee, editEmployee } from "../features/employee/employeeSlice";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { isNil } from "lodash";
import dayjs from "dayjs";

function AddEmployeeForm() {
    const dispatch = useDispatch();
    const [searchParams] = useSearchParams();
    const employees = useSelector((state) => state.employees.employees);
    const showComponents = useSelector((state) => state.epis.showComponents);
    const employeesStatus = useSelector((state) => state.employees.status);
    const [isActive, setIsActive] = useState(false);
    const [form] = Form.useForm();
    const id = searchParams.get("id");
    const isEditMode = !isNil(id);

    const initialValues = {
        name: "",
        cpf: "",
        rg: "",
        role: "",
        gender: "",
        birthDate: null,
        medicalCertificate: null,
    };

    useEffect(() => {
        form.setFieldValue("isActive", isActive);
    }, [form, isActive]);

    useEffect(() => {
        if (isEditMode && employees) {
            if (employeesStatus === "succeeded") {
                const [employee] = employees.filter((e) => e.id === id);

                form.setFieldsValue({
                    ...employee,
                    birthDate: dayjs(employee.birthDate, "YYYY-MM-DD"),
                });
            }
        }
    }, [form, employeesStatus, dispatch, id, employees, isEditMode]);

    const onFinish = (values) => {
        const updatedValues = { ...values };
        if (isEditMode) {
            dispatch(editEmployee({ ...updatedValues, id }));
        } else {
            dispatch(addEmployee(updatedValues));
        }
        console.log("Success:", updatedValues);
    };

    const onFinishFailed = (errorInfo) => {
        console.log("Failed:", errorInfo);
    };

    const handleIsActiveChange = (value) => {
        setIsActive(value);
    };

    return (
        <ConfigProvider
            theme={{
                token: {
                    colorPrimary: "#649FBF",
                    borderRadius: 10,
                    colorBorder: "#649FBF",
                    colorBgContainer: "transparent",
                },
                components: {
                    Button: {
                        colorBgContainer: "transparent",
                        borderColor: "#649FBF",
                        colorText: "#649FBF",
                        colorPrimaryHover: "#4FA1C1",
                        borderWidth: 2,
                    },
                },
            }}
        >
            <div className="w-full bg-white rounded-3xl">
                <Header
                    title={
                        isEditMode
                            ? "Editar Funcionário"
                            : "Adicionar Funcionário"
                    }
                />
                <div className="p-6">
                    <Form
                        form={form}
                        name="employee"
                        className="flex flex-col gap-5"
                        initialValues={initialValues}
                        onFinish={onFinish}
                        onFinishFailed={onFinishFailed}
                    >
                        <IsActive
                            isActive={isActive}
                            onChange={handleIsActiveChange}
                        />
                        <EmployeeDetailsForm />
                        <EpiForm />
                        {showComponents && <MedicalCertificate />}
                        <div className="w-full mb-0">
                            <Button
                                type="primary"
                                htmlType="submit"
                                style={{
                                    background: "transparent",
                                    width: "100%",
                                    display: "block",
                                    textAlign: "center",
                                    borderColor: "#649FBF",
                                    color: "#649FBF",
                                    marginTop: "2rem",
                                }}
                            >
                                Salvar
                            </Button>
                        </div>
                    </Form>
                </div>
            </div>
        </ConfigProvider>
    );
}

export default AddEmployeeForm;
