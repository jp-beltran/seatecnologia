import { UploadOutlined } from "@ant-design/icons";
import {
    Button,
    Upload,
    ConfigProvider,
    Typography,
    Form,
    message,
} from "antd";

function MedicalCertificate() {
    const props = {
        name: "file",
        onChange(info) {
            if (info.file.status !== "uploading") {
                console.log(info.file, info.fileList);
            }
            if (info.file.status === "done") {
                message.success(`${info.file.name} file uploaded successfully`);
            } else if (info.file.status === "error") {
                message.error(`${info.file.name} file upload failed.`);
            }
        },
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
            <div className="border-2 border-[color:var(--Default,#649FBF)] rounded-2xl p-6 shadow-[0px_4px_4px_0px_rgba(0,0,0,0.15)] w-full">
                <Typography.Title
                    level={5}
                    className="mb-4 text-[color:var(--Dark,#272F33)]"
                >
                    Adicione Atestado de Saúde (opcional):
                </Typography.Title>

                <Form.Item
                    name="medicalCertificate"
                    valuePropName="medicalCertificate"
                    className="w-full"
                >
                    <Upload
                        name="medicalCertificate"
                        className="w-full flex flex-col-reverse"
                        multiple={false}
                        maxCount={1}
                        itemRender={(originNode) => originNode.props.children}
                        {...props}
                    >
                        <Button
                            type="default"
                            icon={<UploadOutlined />}
                            style={{
                                width: "100%",
                                display: "inline-flex",
                                textAlign: "center",
                            }}
                        >
                            Selecionar Arquivo
                        </Button>
                    </Upload>
                </Form.Item>
            </div>
        </ConfigProvider>
    );
}

export default MedicalCertificate;
