# Gerenciador de Tarefas

Aplicação em desenvolvimento para organização de tarefas com interface moderna, construída com React e Vite. O projeto já conta com uma base visual montada, componentes separados para criação e listagem de tarefas e uma estrutura inicial de backend preparada para integração com Firebase.

## Sobre o projeto

O objetivo desta aplicação é permitir o cadastro, visualização e evolução do controle de tarefas em uma experiência simples e direta. No estado atual, a interface já apresenta:

- uma tela principal com layout responsivo;
- área dedicada para criação de tarefas;
- área dedicada para exibição da lista de tarefas;
- estrutura preparada para expandir a lógica de persistência e integração com backend.

Como o projeto ainda está em construção, parte das funcionalidades segue em fase inicial de implementação. Ainda assim, a base atual já descreve bem a direção da aplicação e facilita a continuação do desenvolvimento.

## Tecnologias utilizadas

- React 18
- Vite
- JavaScript
- Tailwind CSS
- PostCSS
- ESLint
- Firebase Realtime Database como base planejada para integração de dados

## Funcionalidades atuais

- Exibição de uma tela principal com o nome do projeto.
- Componente de criação de tarefas com campos para nome e descrição.
- Componente responsável pela listagem das tarefas existentes.
- Estrutura separada entre frontend e uma pasta de backend em desenvolvimento.

## Estrutura do projeto

```text
Gerenciador-de-Tarefas-React/
├── src/
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   ├── main.jsx
│   └── Components/
│       ├── AddTask.jsx
│       └── Task.jsx
├── Backend/
│   ├── DataBase/
│   │   └── db.ts
│   └── SRC/
│       ├── Data/
│       │   └── dataAcess.ts
│       └── Routes/
│           └── route.ts
├── public/
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
└── eslint.config.js
```

## Estado atual

O frontend já está estruturado com componentes e estilo base. No momento, a lista de tarefas ainda usa dados estáticos e a integração com persistência real não foi finalizada. A pasta Backend já existe como preparação para conexão com Firebase e organização futura das rotas e do acesso aos dados.

## Como executar o projeto

1. Instale as dependências:

```bash
npm install
```

2. Inicie o ambiente de desenvolvimento:

```bash
npm run dev
```

3. Gere uma build de produção, se necessário:

```bash
npm run build
```

4. Pré-visualize a build localmente:

```bash
npm run preview
```

## Próximos passos de desenvolvimento:

- conectar o formulário de criação à lista de tarefas;
- implementar persistência real dos dados;
- finalizar as rotas do backend;
- integrar um banco de dados para armazenamento das tarefas;
- melhorar validação e usabilidade do fluxo de criação de tarefas.
- adicionar funcionalidades de edição e exclusão de tarefas;