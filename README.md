<div align="center">  

# 🚀 Nest CRUD Fast

![NestJS](https://img.shields.io/badge/nestjs-%23E0234E.svg?style=for-the-badge&logo=nestjs&logoColor=white)
![Next JS](https://img.shields.io/badge/Next-black?style=for-the-badge&logo=next.js&logoColor=white)
![Prisma](https://img.shields.io/badge/Prisma-3982CE?style=for-the-badge&logo=Prisma&logoColor=white)
![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)
![License](https://img.shields.io/badge/license-MIT-green?style=for-the-badge)

</div>

> Um boilerplate Fullstack robusto e performático para acelerar o seu desenvolvimento.

**Nest CRUD Fast** é uma base sólida para aplicações modernas, combinando o poder do **NestJS** no backend com a interatividade do **Next.js 15** no frontend. Projetado para escalabilidade, tipagem forte e experiência de desenvolvedor superior.


## ✨ Funcionalidades

- 🔌 **API RESTful com NestJS**: Arquitetura modular e escalável.
- 🛡️ **Type-Safe Database**: Integração completa com **Prisma ORM** (SQLite/MySQL).
- 🎨 **Frontend Moderno**: Interface construída com **Next.js 15** e **React 19**.
- 💅 **Estilização Premium**: Design responsivo e customizável com **Tailwind CSS**.
- 🔐 **Autenticação Pronta**: Estrutura preparada para JWT e Bcrypt.
- 📝 **CRUD Completo**: Exemplos práticos de operações de banco de dados.



## 🛠️ Tech Stack

<div align="center">

| Backend | Frontend | Ferramentas |
|---------|----------|-------------|
| ![NestJS](https://img.shields.io/badge/-NestJS-E0234E?logo=nestjs&logoColor=white) | ![Next.js](https://img.shields.io/badge/-Next.js-000000?logo=next.js&logoColor=white) | ![Prisma](https://img.shields.io/badge/-Prisma-2D3748?logo=prisma&logoColor=white) |
| ![TypeScript](https://img.shields.io/badge/-TypeScript-3178C6?logo=typescript&logoColor=white) | ![React](https://img.shields.io/badge/-React-61DAFB?logo=react&logoColor=white) | ![NPM](https://img.shields.io/badge/-NPM-CB3837?logo=npm&logoColor=white) |
| ![Node.js](https://img.shields.io/badge/-Node.js-339933?logo=node.js&logoColor=white) | ![Tailwind](https://img.shields.io/badge/-Tailwind-38B2AC?logo=tailwindcss&logoColor=white) | ![Git](https://img.shields.io/badge/-Git-F05032?logo=git&logoColor=white) |

</div>

## 🚀 Começando

Siga os passos abaixo para rodar o projeto localmente.

### Pré-requisitos

Certifique-se de ter instalado:
- [Node.js](https://nodejs.org/) (v20 ou superior recomendado)
- [NPM](https://www.npmjs.com/) ou PNPM

### 1. Instalação

Clone o repositório e instale as dependências:

```bash
# Clone o repositório
git clone https://github.com/seu-usuario/nest-crud-fast.git

# Entre na pasta do projeto
cd nest-crud-fast
```

#### Backend

```bash
cd backend
npm install

# Configurar o banco de dados (SQLite por padrão)
npx prisma migrate dev
```

#### Frontend

```bash
cd ../frontend
npm install
```

### 2. Configuração de Ambiente (.env)

O projeto já vem pré-configurado, mas você pode ajustar as variáveis de ambiente conforme necessário.

**Backend (`backend/.env`):**
```env
DATABASE_URL="file:./dev.db"
# DATABASE_URL="mysql://root:password@localhost:3306/mydb" # Para MySQL
```

### 3. Rodando a Aplicação

Abra dois terminais para rodar o backend e o frontend simultaneamente.

**Terminal 1 (Backend):**
```bash
cd backend
npm run start:dev
# O servidor iniciará em http://localhost:3000
```

**Terminal 2 (Frontend):**
```bash
cd frontend
npm run dev
# O frontend iniciará em http://localhost:3001 (ou porta disponível)
```

---

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

---

<div align="center">
  <sub>Desenvolvido com ❤️ por <a href="https://github.com/seu-usuario">Seu Nome</a></sub>
</div>
