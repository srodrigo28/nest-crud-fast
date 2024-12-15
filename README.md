
#### Iniciando backend
* instalação global
``` ok
npm install -g @nestjs/cli
```

* criando o projeto
``` ok
npx nest new backend
```

#### instalando o prisma

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

#### Iniciando backend já configurado com tabela

* Criando primeiro modulo
``` ok
npx nest g module db
```

* criando resorce api
* marcar grid api
```
npx nest g resource produto
```

* Criando service entrar na pasta src/db
```
npx nest g service prisma --flat --no-spec
```

#### Ref.
```
https://www.youtube.com/watch?v=aouatZu9QiU
```
