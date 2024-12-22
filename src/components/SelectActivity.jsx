import { Form, Input, Select, Button, Typography, ConfigProvider } from 'antd';

function SelectActivity() {
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

        <div className="border-2 border-[color:var(--Default,#649FBF)] rounded-2xl p-4 shadow-[0px_4px_4px_0px_rgba(0,0,0,0.15)]">
            <Form className="w-full">
                <div className="w-full">
                    <Form.Item
                        name="activity"
                    >
                        <Typography.Title level={5}>Selecione a Atividade:</Typography.Title>
                        <Select>
                            <Select.Option value="1">Atividade 1</Select.Option>
                            <Select.Option value="2">Atividade 2</Select.Option>
                            <Select.Option value="3">Atividade 3</Select.Option>
                            <Select.Option value="4">Atividade 4</Select.Option>
                        </Select>
                    </Form.Item>
                </div>

                <div className="w-full flex flex-row items-end justify-start gap-4">
                    {/* EPI Selection */}
                    <Form.Item name="epiObject" className="w-1/3">
                    <Typography.Title level={5}>Selecione o EPI:</Typography.Title>
                        <Select>
                            <Select.Option value="1">Calçado de Segurança</Select.Option>
                            <Select.Option value="2">Capacete</Select.Option>
                            <Select.Option value="3">Luvas</Select.Option>
                            <Select.Option value="4">Óculos de proteção</Select.Option>
                        </Select>
                    </Form.Item>

                    {/* CA Number Input */}
                    <Form.Item name="caNumber" className="w-1/3">
                        <Typography.Title level={5}>Informe o número do CA:</Typography.Title>
                        <Input type="number" />
                    </Form.Item>


                    <Form.Item className="mb-0 w-1/3">
                        <Button type="default" className='w-full'>
                            Adicionar
                        </Button>
                    </Form.Item>
                </div>

                <Form.Item>
                    <Button htmlType="onSubmit" className='w-full' >
                        Excluir Atividade
                    </Button>
                </Form.Item>

            </Form>
        </div>
    </ConfigProvider>
    );
}

export default SelectActivity;
