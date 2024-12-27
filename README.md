> #### <h1 style="text-center"> Iniciando Frontend </h1>

> ##### capitulo 01 <h2 style="text-center"> Iniciando Backend NestJS </h2>
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

> ##### capitulo 02 <h2 style="text-center"> Iniciando Prisma </h2>

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

> ##### capitulo 03 <h2 style="text-center"> Migrade sincronizando tabelas </h2>
> 

> ##### capitulo 04 <h2 style="text-center"> Rodando projeto </h2>
* no terminal
```
npm run start:dev
```

> ##### Capitulo 05 <h2 style="text-center"> Iniciando Backend </h2>

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
