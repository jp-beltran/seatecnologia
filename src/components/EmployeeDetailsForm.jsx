import React from "react";
import { ConfigProvider, DatePicker, Form, Input, Radio, Select,  } from "antd";

function EmployeeDetailsForm() {
  return (
    <ConfigProvider
      theme={{
        token: {
          colorBorder: "#649FBF", // Cor da borda padrão
          borderRadius: 8,        // Raio da borda
          colorPrimary: "#649FBF", // Cor primária (aplicada no Radio ao selecionar)
          controlOutline: "#649FBF", // Cor da borda no foco
          controlBorderWidth: 2,  // Espessura da borda
        },
      }}
    >
      <div className="flex flex-row border-2 border-[color:var(--Default,#649FBF)] rounded-2xl p-4 shadow-[0px_4px_4px_0px_rgba(0,0,0,0.15)]">
        <Form className="flex flex-row w-full justify-between gap-8">
          {/* Primeira Coluna */}
          <div className="flex flex-col items-start justify-start gap-4 w-1/2">
            <Form.Item
              label={
                <span className="text-sm font-medium text-[color:var(--Dark,#272F33)]">
                  Nome
                </span>
              }
              name="name"
              className="w-full"
              labelCol={{ span: 24 }}
              wrapperCol={{ span: 24 }}
            >
              <Input placeholder="Digite o nome" />
            </Form.Item>

            <Form.Item
              label={
                <span className="text-sm font-medium text-[color:var(--Dark,#272F33)]">
                  CPF
                </span>
              }
              name="cpf"
              className="w-full"
              labelCol={{ span: 24 }}
              wrapperCol={{ span: 24 }}
              rules={[
                { required: true, message: "Por favor, insira o CPF!" },
                {
                  pattern: /^\d{3}\.\d{3}\.\d{3}-\d{2}$/,
                  message: "Insira um CPF válido no formato 000.000.000-00!",
                },
              ]}
            >
                <Input
                    mask="999.999.999-99"
                    placeholder="Digite o CPF"
                    className="ant-input"
                    style={{ borderColor: "#649FBF", borderRadius: "8px", width: "100%" }}
                />
            </Form.Item>

            <Form.Item
              label={
                <span className="text-sm font-medium text-[color:var(--Dark,#272F33)]">
                  RG
                </span>
              }
              name="rg"
              className="w-full"
              labelCol={{ span: 24 }}
              wrapperCol={{ span: 24 }}
              rules={[
                { required: true, message: "Por favor, insira o RG!" },
                {
                  pattern: /^\d{2}\.\d{3}\.\d{3}-\d{1}$/,
                  message: "Insira um RG válido no formato 00.000.000-0!",
                },
              ]}
            >
                <Input
                    mask="9.999.999"
                    placeholder="Digite o RG"
                    className="ant-input"
                    style={{ borderColor: "#649FBF", borderRadius: "8px", width: "100%" }}
                />
            </Form.Item>
          </div>

          {/* Segunda Coluna */}
          <div className="flex flex-col items-start justify-start gap-4 w-1/2">
            <Form.Item
              label={
                <span className="text-sm font-medium text-[color:var(--Dark,#272F33)]">
                  Sexo
                </span>
              }
              name="gender"
              className="w-full"
              labelCol={{ span: 24 }}
              wrapperCol={{ span: 24 }}
              
            >
              <Radio.Group>
                <Radio value="Masculino">Masculino</Radio>
                <Radio value="Feminino">Feminino</Radio>
              </Radio.Group>
            </Form.Item>

            <Form.Item
              label={
                <span className="text-sm font-medium text-[color:var(--Dark,#272F33)]">
                  Data de Nascimento
                </span>
              }
              name="birthDate"
              className="w-full"
              labelCol={{ span: 24 }}
              wrapperCol={{ span: 24 }}
            >
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
              label={
                <span className="text-sm font-medium text-[color:var(--Dark,#272F33)]">
                  Cargo
                </span>
              }
              name="role"
              className="w-full"
              labelCol={{ span: 24 }}
              wrapperCol={{ span: 24 }}
            >
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
