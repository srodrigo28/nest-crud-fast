
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
model Usuario{
  id Int @id @default(autoincrement())
  nome String @unique
  email String @unique
  senha String
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt

  @@map("usuario")
}
```

* rodando nosso primeiro migrate criando a tabela
``` ok
npx prisma migrate dev
```

#### Iniciando backend já configurado com tabela

* Criando primeiro modulo
```
npx nest g module db
```

* criando controlador
```
npx nest g co auth --flat --no-spec
```

* criando modulo db
```
npx nest g mo db
```

* criando um service rodar dentro da pasta db
```
npx nest g s prisma --flat --no-spec
```

* adicionar db/prisma.servirce

* adicionar backend\src\auth
```
npx nest g pr usuario.repositorio --flat --no-spec
```

#### Nova dependências para ajudar no build
* dentro da pasta packages/core
```
npm install tsup
```

#### Ref.
```
https://www.youtube.com/watch?v=aouatZu9QiU
```