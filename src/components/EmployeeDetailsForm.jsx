import React from "react";
import { ConfigProvider, DatePicker, Form, Input, Radio, Select, Typography } from "antd";

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
        <Form className="flex flex-row w-full justify-between gap-8">
          {/* Primeira Coluna */}
          <div className="flex flex-col items-start justify-start gap-4 w-1/2">
            
            <Form.Item
              name="name"
              className="w-full"
            >
              <Typography.Title level={5}>Nome</Typography.Title>
              <Input placeholder="Digite o nome" className="w-full" />
            </Form.Item>

            <Form.Item
              name="cpf"
              className="w-full"
              rules={[
                { required: true, message: "Por favor, insira o CPF!" },
                {
                  pattern: /^\d{3}\.\d{3}\.\d{3}-\d{2}$/,
                  message: "Insira um CPF válido no formato 000.000.000-00!",
                },
              ]}
            >
                <Typography.Title level={5}>
                  CPF
                </Typography.Title>
                <Input
                    mask="999.999.999-99"
                    placeholder="Digite o CPF"
                    className="ant-input"
                    style={{ borderColor: "#649FBF", borderRadius: "8px", width: "100%" }}
                />
            </Form.Item>

            <Form.Item
              name="rg"
              className="w-full"
              rules={[
                { required: true, message: "Por favor, insira o RG!" },
                {
                  pattern: /^\d{2}\.\d{3}\.\d{3}-\d{1}$/,
                  message: "Insira um RG válido no formato 00.000.000-0!",
                },
              ]}
            >
                <Typography.Title level={5}> RG </Typography.Title>
                <Input
                    mask="9.999.999"
                    placeholder="Digite o RG"
                    className="ant-input"
                    style={{ borderColor: "#649FBF", borderRadius: "8px", width: "100%" }}
                />
            </Form.Item>
          </div>

          {/* Segunda Coluna */}
          <div className="flex flex-col items-start justify-start gap-4 w-1/2 mt-3">
            <Form.Item
              name="gender"
            >
              <Typography.Title level={5}>Gênero</Typography.Title>
              <Radio.Group className="">
                <Radio value="Masculino">Masculino</Radio>
                <Radio value="Feminino">Feminino</Radio>
              </Radio.Group>
            </Form.Item>

            <Form.Item
              name="birthDate"
              className="w-full"
            >
              <Typography.Title level={5}>Data de Nascimento</Typography.Title>
              <DatePicker 
                placeholder="Digite a data de nascimento" 
                style={{
                    width: "100%",
                    borderColor: "#649FBF",
                    borderRadius: "8px",
                }}
                format="DD/MM/YYYY"
                
                />
            </Form.Item>

            <Form.Item
              name="role"
              className="w-full"
            >
                <Typography.Title level={5}>Cargo</Typography.Title>
                <Select placeholder="Digite o cargo" >
                    <Select.Option value="1">Operador de máquinas</Select.Option>
                    <Select.Option value="2">Soldador</Select.Option>
                    <Select.Option value="3">Eletricista</Select.Option>
                    <Select.Option value="4">Pedreiro</Select.Option>
                </Select>
            </Form.Item>
          </div>
        </Form>
      </div>
    </ConfigProvider>
  );
}

export default EmployeeDetailsForm;
