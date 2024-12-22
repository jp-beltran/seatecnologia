# AddEmployeeForm

Este projeto implementa um formulário para adicionar funcionários. O formulário inclui campos para verificar se o funcionário está ativo, inserir detalhes pessoais, preencher informações sobre EPIs e anexar atestados médicos. É construído com Ant Design, React e utiliza configurações personalizadas via `ConfigProvider`. 🎨✨📋

## Funcionalidades Principais
- **Configuração Global de Tema**: Utiliza o `ConfigProvider` do Ant Design para definir temas globais, como cores primárias, bordas arredondadas e estilização de botões. 🌟
- **Formulário Dinâmico**: Inclui múltiplos campos de entrada, como checkboxes, uploads e campos de texto, com validações e estilizações consistentes. ✅
- **Upload de Arquivos**: Permite anexar documentos, como atestados médicos, com integração ao componente `Upload` do Ant Design. 📂

## Componentes

### AddEmployeeForm
Este é o componente principal que:
- Renderiza o cabeçalho com título e botão "Voltar".
- Contém o formulário com os componentes filhos: `IsActive`, `EmployeeDetailsForm`, `EpiForm`, `MedicalCertificate`. 📝
- Inclui um botão de submissão estilizado para "Salvar".

### IsActive
Verifica se o trabalhador está ativo. Inclui um `Switch` do Ant Design com estilização personalizada. 🔄

### EmployeeDetailsForm
Formulário para coletar informações básicas do funcionário:
- Nome
- CPF (com máscara de input)
- RG
- Sexo (com botões de rádio estilizados) 🧑‍💼

### EpiForm
Formulário para selecionar os Equipamentos de Proteção Individual (EPIs) que o trabalhador utiliza, incluindo um checkbox para casos em que nenhum EPI é usado. 🥾

### MedicalCertificate
Permite anexar um atestado médico opcional usando o componente `Upload`. O botão para upload e o botão de submissão possuem largura total e estilização personalizada. 📋

### SelectActivity
Formulário para seleção de atividades e EPIs:
- Inclui `Select` para atividades e EPIs.
- Campo de entrada para número do CA.
- Botão para adicionar atividade com largura total. 🛠️

## ConfigProvider
O `ConfigProvider` é usado para personalizar os seguintes aspectos:
- Cor primária (`#649FBF`).
- Bordas arredondadas com raio de 10px.
- Cor do texto, borda e fundo dos botões.
- Estilização para hover no botão (`#4FA1C1`). 🎨

### Exemplo de Configuração de Tema
```javascript
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
```

## Requisitos

- Node.js >= 14.x
- React >= 17.x
- Ant Design >= 5.x

## Como Executar

1. Clone o repositório: 📂
```bash
git clone https://github.com/seu-usuario/add-employee-form.git
```

2. Instale as dependências: 💾
```bash
npm install
```

3. Inicie o servidor de desenvolvimento: 🚀
```bash
npm start
```

4. Acesse o formulário no navegador:
```
http://localhost:3000
```

## Estrutura de Arquivos
```plaintext
src/
├── assets/
│   └── back_arrow.svg
├── components/
│   ├── AddEmployeeForm.js
│   ├── IsActive.js
│   ├── EmployeeDetailsForm.js
│   ├── EpiForm.js
│   ├── MedicalCertificate.js
│   └── SelectActivity.js
├── App.js
└── index.js
```

## Contribuição

Sinta-se à vontade para contribuir com melhorias para o formulário ou corrigir bugs:
1. Faça um fork do projeto. 🌿
2. Crie um branch para sua funcionalidade: `git checkout -b minha-nova-funcionalidade` 🔧
3. Envie suas alterações: `git push origin minha-nova-funcionalidade` 📤
4. Abra um Pull Request. ✅

## Licença
Este projeto está licenciado sob a Licença MIT. Consulte o arquivo `LICENSE` para mais detalhes. 📜✨

