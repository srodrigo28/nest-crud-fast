> ### Iniciando Frontend

> ### Iniciando backend
* instalação global
``` ok
npm install -g @nestjs/cli
```

* criando o projeto
``` ok
npx nest new backend
```

* entrando na pasta backend
``` ok
cd backend
```

> ### instalando o prisma

* criando o projeto cd apps/backend
```ok
npm install prisma -D
```

* iniciando projeto sqlite
```ok
npx prisma init --datasource-provider sqlite
```
|| <br>
```
npx prisma init --datasource-provider mysql
```
* dentro da pasta prisma/shema.prisma
``` ok
model Produto{
  id        Int @id @default(autoincrement())
  nome      String @unique
  descricao String 
  preco     String
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt

  @@map("produto")
}
```

* rodando nosso primeiro migrate criando a tabela
``` ok
npx prisma migrate dev
```

<b>Caso der Error :( </b>
``` ok Prisma
npm i prisma@6.1.0 -D --silent
```

> ### Iniciando backend já configurado com tabela

* Criando primeiro modulo
``` ok
npx nest g module db
```

* criando resorce api
* marcar rest api
```
npx nest g resource produto
```

* Criando serviceDB entrar na pasta src/db
```
npx nest g service prisma --flat --no-spec
```

> #### caso use o git clone clone
* 1. membrar do .env-exempo
* 2. mebrar do prisma
```
npx prisma migrate dev
```

> ### Rodando o Projeto
* no terminal
```
npm run dev
```
> ### Entidades Rotas

* <b> Post </b> Cadastrar novo
```
http://localhost:3001/produto
```
body
```
{
  "nome": "Camisa",
  "descricao": "camisa jeans 2024",
  "preco": 120
}
```

* <b> Get </b> Listar todos 
```
http://localhost:3001/produto
```

* <b> Get Id</b> Unico Item
```
http://localhost:3001/produto/:id
```

* <b> Delete Id </b> Apagar por id
```
http://localhost:3001/produto/:id
```

* <b> Put Id </b> Editar por id
```
http://localhost:3001/produto/:id
```
body
```
{
  "nome": "Camisa",
  "descricao": "camisa jeans 2024",
  "preco": 120
}
```

#### Ref.
```
https://www.youtube.com/watch?v=aouatZu9QiU
```
