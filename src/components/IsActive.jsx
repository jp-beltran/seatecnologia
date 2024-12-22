import React from "react";
import { ConfigProvider, Switch } from "antd";

const themeConfig = {
  components: {
    Switch: {
      colorPrimary: "#4FA1C1", // Cor da "bola" do switch
      colorPrimaryHover: "#4FA1C1", // Cor da bola ao passar o mouse
      colorBgContainer: "#DBDBDB", 
      colorBgContainerChecked: "#DBDBDB", 
      controlHeight: 24, 
    },
  },
};

function IsActive() {
  return (
    <ConfigProvider theme={themeConfig}>
      <div className="flex flex-row items-center justify-between w-full border-2 border-[color:var(--Default,#649FBF)] rounded-2xl p-2 
      shadow-[0px_4px_4px_0px_rgba(0,0,0,0.15)]
      ">
        <h1 className="text-[color:var(--Dark,#272F33)] text-base font-medium leading-[normal]">
          O trabalhador está ativo?
        </h1>
        <Switch 
          checkedChildren="Ativo" 
          unCheckedChildren="Inativo"  
        />
      </div>
    </ConfigProvider>
  );
}

export default IsActive;
