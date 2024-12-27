> ### Iniciando Frontend

> ### Capitulo 01 Iniciando backend
* <b>00</b> instalação global
``` ok
npm install -g @nestjs/cli
```

* <b>01</b> criando o projeto
``` ok
npx nest new backend
```

* <b>02</b> entrando na pasta backend
``` ok
cd backend
```

> ### Capitulo 02 instalando o prisma

* <b>03</b> criando o projeto cd apps/backend
```ok
npm install prisma -D
```

*<b>04</b> Methodo de conexão banco de Dados iniciando projeto sqlite
```ok
npx prisma init --datasource-provider sqlite
```
|| <br>
```
npx prisma init --datasource-provider mysql
```
* <b>05</b> Dentro da pasta prisma/shema.prisma
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

* <b>06</b> Rodando nosso primeiro migrate criando a tabela
``` ok
npx prisma migrate dev
```

<b> Opcional Caso der Error </b>
``` ok Prisma
npm i prisma@6.1.0 -D --silent
```

> ### Capitulo 03 Iniciando backend já configurado com tabela

* <b> 07 </b> Criando primeiro modulo
``` ok
npx nest g module db
```

* <b> 08 </b> Criando resorce api
* marcar rest api
```
npx nest g resource produto --no-spec
```

* <b> 08 </b> Criando serviceDB entrar na pasta src/db
```
npx nest g service prisma --flat --no-spec
```

> #### caso use o git clone clone
* 1. membrar do .env-exempo
* 2. mebrar do prisma
```
npx prisma migrate dev
```

> ### Capitulo 04 Rodando o Projeto
* no terminal
```
npm run dev
```

> ### Capitulo 05 Entidades Rotas

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
