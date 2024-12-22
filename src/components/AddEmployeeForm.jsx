import back_arrow from '../assets/back_arrow.svg';
import { ConfigProvider, Form, Button } from 'antd';
import IsActive from './IsActive';
import EpiForm from './EpiForm';
import EmployeeDetailsForm from './EmployeeDetailsForm';
import MedicalCertificate from './MedicalCertificate';

function AddEmployeeForm() {
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
            <div className="w-1/2 bg-white rounded-3xl">
                {/* Header */}
                <header className="bg-[#4FA1C1] w-full h-14 flex justify-start items-center rounded-t-3xl px-6 py-3 gap-4">
                    <img src={back_arrow} alt="Voltar" />
                    <h1 className="text-3xl text-white">Adicionar Funcionário</h1>
                </header>

                {/* Form */}
                <div className="p-6">
                    <Form className="flex flex-col gap-3">
                        <IsActive />
                        <EmployeeDetailsForm />
                        <EpiForm />
                        <MedicalCertificate />

                        <Form.Item className="w-full mb-0">
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
                        </Form.Item>
                    </Form>
                </div>
            </div>
        </ConfigProvider>
    );
}

export default AddEmployeeForm;
