import { Form, Checkbox, ConfigProvider, Button, Typography } from "antd";
import SelectActivity from "./SelectActivity";

function EpiForm() {
    const onFinish = (values) => {
        console.log("Valores:", values);
    };

    return (
        <ConfigProvider
            theme={{
                components: {
                    Checkbox: {
                        colorPrimary: '#649FBF', // Cor do preenchimento quando marcado
                        colorBorder: '#649FBF', // Cor da borda do checkbox
                    },
                    Button: {
                        colorPrimaryHover: "#4FA1C1", // Cor ao passar o mouse
                        defaultColor: "#649FBF", 
                        colorBorder: "#649FBF", 
                        colorBgContainer: "transparent", 
                        borderRadius: 10
                      },
                },
            }}
        >
            <div className=" flex flex-col border-2 border-[color:var(--Default,#649FBF)] rounded-2xl p-4 shadow-[0px_4px_4px_0px_rgba(0,0,0,0.15)] w-full ">
                <Form onFinish={onFinish}>
                        <div className="flex flex-col items-start justify-start gap-4 ">
                            <h1 className="text-[color:var(--Dark,#272F33)] text-base font-medium leading-[normal]">
                                Quais EPIs o trabalhador usa na atividade?
                            </h1>
                            <Form.Item
                                name="trabalhadorEPI"
                                valuePropName="checked"

                            >
                                
                                <Checkbox >
                                    O trabalhador usa EPI
                                </Checkbox>
                                
                                
                            </Form.Item>
                        </div>

                        <SelectActivity/>

                        <Form.Item>
                            <Button htmlType="onSubmit" className='w-full mt-6 border-2 ' >
                                Adicionar outra atividade
                            </Button>
                    </Form.Item>
                </Form>


            </div>
        </ConfigProvider>
    );
}

export default EpiForm;
