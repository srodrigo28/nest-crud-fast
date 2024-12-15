
#### Iniciando backend
* instalação global
```
npm install -g @nestjs/cli
```

* criando o projeto
```
npx nest new backend
```

#### instalando o prisma

* criando o projeto cd apps/backend
```
npm install prisma -D
```

* iniciando projeto sqlite
```
npx prisma init --datasource-provider sqlite
```
* dentro da pasta prisma/shema.prisma
```
model Usuario{
  id Int @id @default(autoincrement())
  nome String @unique
  email String @unique
  senha String
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt

  @@map("users")
}
```

* rodando nosso primeiro migrate
```
npx prisma migrate dev
```

#### Iniciando backend já configurado com tabela

* Criando modulo de autenticação
```
npx nest g mo auth
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