import {
    ConfigProvider,
    DatePicker,
    Form,
    Input,
    Radio,
    Select,
    Typography,
} from "antd";
import InputMask from "react-input-mask";
import {
    validateName,
    validateBirthDate,
    validateRole,
} from "../validators/validators";

function EmployeeDetailsForm() {
    return (
        <ConfigProvider
            theme={{
                token: {
                    colorBorder: "#649FBF",
                    borderRadius: 8,
                    colorPrimary: "#649FBF",
                    controlOutline: "#649FBF",
                    controlBorderWidth: 2,
                },
            }}
        >
            <div className="flex flex-row border-2 border-[color:var(--Default,#649FBF)] rounded-2xl p-4 shadow-[0px_4px_4px_0px_rgba(0,0,0,0.15)]">
                <div className="flex flex-row w-full justify-between gap-8 items-start">
                    <div className="flex flex-col items-start justify-start gap-2 w-1/2 h-full">
                        {/* Nome */}
                        <Typography.Title level={5}>Nome</Typography.Title>
                        <Form.Item
                            name="name"
                            className="w-full"
                            shouldUpdate
                            rules={[
                                {
                                    required: true,
                                    message: "Por favor, insira seu nome!",
                                },
                                { validator: validateName },
                            ]}
                        >
                            <Input
                                placeholder="Digite o nome"
                                className="w-full"
                            />
                        </Form.Item>

                        {/* CPF com máscara */}
                        <Typography.Title level={5}>CPF</Typography.Title>
                        <Form.Item
                            name="cpf"
                            className="w-full"
                            rules={[
                                {
                                    required: true,
                                    message: "Por favor, insira seu CPF!",
                                },
                            ]}
                        >
                            <InputMask mask="999.999.999-99">
                                {(inputProps) => (
                                    <Input
                                        {...inputProps}
                                        placeholder="Digite o CPF"
                                    />
                                )}
                            </InputMask>
                        </Form.Item>

                        <Typography.Title level={5}>RG</Typography.Title>
                        <Form.Item
                            name="rg"
                            className="w-full"
                            rules={[
                                {
                                    required: true,
                                    message: "Por favor, insira o RG!",
                                },
                            ]}
                        >
                            <InputMask mask="9.999.999  ">
                                {(inputProps) => (
                                    <Input
                                        {...inputProps}
                                        placeholder="Digite o RG"
                                    />
                                )}
                            </InputMask>
                        </Form.Item>
                    </div>

                    <div className="flex flex-col items-start justify-start gap-[8px] w-1/2">
                        <Typography.Title level={5}>Gênero</Typography.Title>
                        <Form.Item
                            name="gender"
                            rules={[
                                {
                                    required: true,
                                    message: "O Gênero deve ser selecionado",
                                },
                            ]}
                        >
                            <Radio.Group>
                                <Radio value="Masculino">Masculino</Radio>
                                <Radio value="Feminino">Feminino</Radio>
                            </Radio.Group>
                        </Form.Item>

                        <Typography.Title level={5}>
                            Data de Nascimento
                        </Typography.Title>
                        <Form.Item
                            name="birthDate"
                            className="w-full"
                            rules={[
                                {
                                    required: true,
                                    message:
                                        "Por favor, insira a data de nascimento!",
                                },
                                { validator: validateBirthDate },
                            ]}
                        >
                            <DatePicker
                                placeholder="Digite a data de nascimento"
                                format={{
                                    format: "DD/MM/YYYY",
                                    type: "mask",
                                }}
                                style={{
                                    width: "100%",
                                    borderColor: "#649FBF",
                                    borderRadius: "8px",
                                }}
                            />
                        </Form.Item>

                        <Typography.Title level={5}>Cargo</Typography.Title>
                        <Form.Item
                            name="role"
                            className="w-full"
                            rules={[
                                {
                                    required: true,
                                    message: "Por favor, selecione um cargo!",
                                },
                                { validator: validateRole },
                            ]}
                        >
                            <Select placeholder="Selecione o cargo">
                                <Select.Option value="1">
                                    Operador de máquinas
                                </Select.Option>
                                <Select.Option value="2">
                                    Soldador
                                </Select.Option>
                                <Select.Option value="3">
                                    Eletricista
                                </Select.Option>
                                <Select.Option value="4">
                                    Pedreiro
                                </Select.Option>
                            </Select>
                        </Form.Item>
                    </div>
                </div>
            </div>
        </ConfigProvider>
    );
}

export default EmployeeDetailsForm;
