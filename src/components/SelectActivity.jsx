import { Input, Select, Button, Typography, ConfigProvider, Form } from "antd";
import { useState } from "react";

function SelectActivity({ onRemove }) {
    const [activity, setActivity] = useState(null);
    const [epi, setEpi] = useState(null);
    const [caNumber, setCaNumber] = useState("");

    const handleAddClick = () => {
        console.log({
            activity,
            epi,
            caNumber,
        });
    };

    return (
        <ConfigProvider
            theme={{
                token: {
                    colorPrimary: "#649FBF",
                    borderRadius: 10,
                    colorBorder: "#649FBF",
                    colorBgContainer: "transparent",
                    defaultColor: "#649FBF",
                },
            }}
        >
            <div className="border-2 border-[color:var(--Default,#649FBF)] rounded-2xl p-4 shadow-[0px_4px_4px_0px_rgba(0,0,0,0.15)] mb-5 ">
                <div className="w-full flex flex-col gap-6">
                    <div className="w-full">
                        <div className="">
                            <Typography.Title level={5}>
                                Selecione a Atividade:
                            </Typography.Title>
                            <Select
                                className="w-full"
                                onChange={(value) => setActivity(value)}
                                rules={[
                                    {
                                        required: true,
                                        message:
                                            "Por favor, informe o número do CA!",
                                    },
                                ]}
                            >
                                <Select.Option value="1">
                                    Atividade 1
                                </Select.Option>
                                <Select.Option value="2">
                                    Atividade 2
                                </Select.Option>
                                <Select.Option value="3">
                                    Atividade 3
                                </Select.Option>
                                <Select.Option value="4">
                                    Atividade 4
                                </Select.Option>
                            </Select>
                        </div>
                    </div>

                    <div className="w-full flex flex-row items-end justify-start gap-4">
                        <div name="epiObject" className="w-1/3">
                            <Typography.Title level={5}>
                                Selecione o EPI:
                            </Typography.Title>
                            <Form.Item>
                                <Select
                                    className="w-full"
                                    onChange={(value) => setEpi(value)}
                                    rules={[
                                        {
                                            required: true,
                                            message:
                                                "Por favor, informe o número do CA!",
                                        },
                                    ]}
                                >
                                    <Select.Option value="1">
                                        Calçado de Segurança
                                    </Select.Option>
                                    <Select.Option value="2">
                                        Capacete
                                    </Select.Option>
                                    <Select.Option value="3">
                                        Luvas
                                    </Select.Option>
                                    <Select.Option value="4">
                                        Óculos de proteção
                                    </Select.Option>
                                </Select>
                            </Form.Item>
                        </div>

                        <div name="caNumber" className="w-1/3">
                            <Typography.Title level={5}>
                                Informe o número do CA:
                            </Typography.Title>
                            <Input
                                type="number"
                                onChange={(e) => setCaNumber(e.target.value)}
                                rules={[
                                    {
                                        required: true,
                                        message:
                                            "Por favor, informe o número do CA!",
                                    },
                                ]}
                            />
                        </div>

                        <div className="mb-0 w-1/3">
                            <Button
                                type="default"
                                className="w-full"
                                onClick={handleAddClick}
                            >
                                Adicionar
                            </Button>
                        </div>
                    </div>

                    <div>
                        <Button
                            htmlType="onSubmit"
                            className="w-full"
                            onClick={onRemove}
                        >
                            Excluir Atividade
                        </Button>
                    </div>
                </div>
            </div>
        </ConfigProvider>
    );
}

export default SelectActivity;
