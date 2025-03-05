Visão Geral
Este projeto, foi desenvolvido como parte de um processo seletivo da SeaTecnologia. Ele tem como objetivo criar um formulário completo para gerenciamento de funcionários, incluindo informações básicas, seleção de EPIs (Equipamentos de Proteção Individual) e anexos de atestados médicos.

# Funcionalidades Principais
## Formulário Dinâmico

- Coleta de dados pessoais (nome, CPF, RG, sexo).
- Verificação de status “Ativo/Inativo” com um switch.
- Upload de arquivos para anexar atestados médicos.
- Seleção e gerenciamento de EPIs.
  
## Integração com Ant Design
- Utilização de componentes prontos (Forms, Switch, Upload, Select etc.).
- Personalização de tema global (cores, tamanho de bordas, botões) via ConfigProvider.
  
## Seleção de Atividades e EPIs
- Campos para inserir atividades e EPIs relacionados.
- Opção para incluir o número CA (Certificado de Aprovação) do EPI.
  
  ## Melhorias de UX
- Máscara de input para CPF.
- Botões com largura total para facilitar a interação.
- Layout simples e intuitivo, facilitando a navegação.

# Estrutura dos Componentes
## AddEmployeeForm
Componente principal que reúne todos os subcomponentes:

Exibe um cabeçalho com título e botão "Voltar".
Renderiza os campos de formulário (dados pessoais, EPIs, atestados).
Possui um botão “Salvar” que finaliza o processo de cadastro.
IsActive

Utiliza um Switch para definir se o funcionário está ativo ou não.
## EmployeeDetailsForm

Coleta informações pessoais: nome, CPF, RG, sexo.
Aplicação de máscara no campo CPF.
## EpiForm

Formulário para selecionar EPIs utilizados.
Inclui opção para “Nenhum EPI utilizado”.
## MedicalCertificate

Permite upload de atestados médicos.
Botão de upload e de submissão estilizados, com largura total.
## SelectActivity

Formulário para vincular atividades e EPIs.
Campos para selecionar atividade, EPI e inserir o número CA.
Botão "Adicionar atividade" com largura total.



## Requisitos

- Node.js >= 14.x
- React >= 17.x
- Ant Design >= 5.x

## Como Executar

1. Clone o repositório: 📂
```bash
git clone https://github.com/jp-beltran/seatecnologia
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


## Contribuição

Sinta-se à vontade para contribuir com melhorias para o formulário ou corrigir bugs:
1. Faça um fork do projeto. 🌿
2. Crie um branch para sua funcionalidade: `git checkout -b minha-nova-funcionalidade` 🔧
3. Envie suas alterações: `git push origin minha-nova-funcionalidade` 📤
4. Abra um Pull Request. ✅

## Licença
Este projeto está licenciado sob a Licença MIT. Consulte o arquivo `LICENSE` para mais detalhes. 📜✨

