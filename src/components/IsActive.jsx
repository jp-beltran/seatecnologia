import { ConfigProvider, Form, Switch } from "antd";

const themeConfig = {
    components: {
        Switch: {
            colorPrimary: "#4FA1C1",
            colorPrimaryHover: "#4FA1C1",
            colorBgContainer: "#DBDBDB",
            colorBgContainerChecked: "#DBDBDB",
            controlHeight: 24,
        },
    },
};

function IsActive({ isActive, onChange }) {
    return (
        <ConfigProvider theme={themeConfig}>
            <div
                className="flex flex-row items-center justify-between w-full border-2 border-[color:var(--Default,#649FBF)] rounded-2xl p-2 
      shadow-[0px_4px_4px_0px_rgba(0,0,0,0.15)]
      "
            >
                <h1 className="text-[color:var(--Dark,#272F33)] text-base font-medium leading-[normal]">
                    O trabalhador está ativo?
                </h1>
                <Form.Item name="isActive">
                    <Switch
                        name="isActive"
                        checked={isActive}
                        onChange={onChange}
                        checkedChildren="Ativo"
                        unCheckedChildren="Inativo"
                    />
                </Form.Item>
            </div>
        </ConfigProvider>
    );
}

export default IsActive;
