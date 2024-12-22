import { Form, Button, Upload, ConfigProvider, Typography } from "antd";

function MedicalCertificate() {
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
            <div className="border-2 border-[color:var(--Default,#649FBF)] rounded-2xl p-6 shadow-[0px_4px_4px_0px_rgba(0,0,0,0.15)] w-full">
                <Form className="w-full">
                    <Typography.Title level={5} className="mb-4 text-[color:var(--Dark,#272F33)]">
                        Adicione Atestado de Saúde (opcional):
                    </Typography.Title>

                    <Form.Item name="medicalCertificate" className="w-full">
                        <Upload
                            className="w-full"
                            maxCount={1} // Limita a 1 arquivo por vez
                            listType="text" // Tipo de exibição da lista de arquivos
                            
                        >
                            <Button
                                type="default"
                                style={{
                                    width: "100%",
                                    display: "block",
                                    textAlign: "center",
                                }}
                            >
                                Selecione o arquivo
                            </Button>
                        </Upload>
                    </Form.Item>

                    <Form.Item className="mt-4">
                        <Button
                            htmlType="submit"
                            type="default"
                            style={{
                                width: "100%",
                                display: "block",
                                textAlign: "center",
                            }}
                        >
                            Selecionar Arquivo
                        </Button>
                    </Form.Item>
                </Form>
            </div>
        </ConfigProvider>
    );
}

export default MedicalCertificate;
