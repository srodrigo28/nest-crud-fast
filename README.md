> #### 1. NestJS Criar aplicação
* criando projeto no terminal
```
npx nest new backend
```

* entrar no diretório
```
cd backend
```

* No diretório src/ apagar os arquivos
* app.controller.spec.ts
* app.service.ts
* app.controller.ts

> #### 2. NestJS ( atualizar )

* src/app.module.ts
```
import { Module } from '@nestjs/common';

@Module({
  imports: [],
  controllers: [],
  providers: [],
})
export class AppModule {}
```

> #### 3. NestJS Permitir o cors

* No diretório src/main.ts
```
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {cors: true});
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
```

> #### 4. Prisma ORM Instalar

* <b>4.1</b> criando o projeto cd apps/backend
```ok
npm install prisma -D
```

* <b>4.2</b> Methodo de conexão banco de Dados iniciando projeto sqlite
```
npx prisma init --datasource-provider sqlite
```

* <b>4.3</b> Dentro da pasta prisma/shema.prisma
``` ok
model Produto{
  id        Int @id @default(autoincrement())
  nome      String @unique
  descricao String 
  preco     Float

  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt

  @@map("produto")
}
```

* <b>4.3.1 Observação </b> Arquivo .env gerado automáticamente configurar de acordo com o banco

> ##### 4.3.2 <b> Opcional Caso der Error </b>
``` ok Prisma
npm i prisma@6.1.0 -D --silent
```

> ##### 4.4 Rodando nosso primeiro migrate criando a tabela
``` ok
npx prisma migrate dev
```

> #### 5. NestJS Instar os modulo DB

> #### 6. NestJS criando no nosso modulo de conexão

* <b>6.1</b> criando conexão com o banco de dados
```
npx nest g module db
```

> <b>6.2</b> * entrar na pasta db
```
cd src/db
```

> <b>6.3</b> * criar o service para o prisma
```
npx nest g service prisma --flat --no-spec
```

* <b>6.4</b> entrar na src/db/db.module.ts editar
```
import { Module } from '@nestjs/common';
import { PrismaService } from './prisma.service';

@Module({
  providers: [PrismaService],
  exports: [PrismaService]
})
export class DbModule {}
```

> ##### 6.5 Editar o Service do Prisma 

* <b>6.5.1</b> entrar na src/db/prisma.service.ts
```
import { Global, Injectable, OnModuleInit } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Global()
@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit {
    async onModuleInit() {
        await this.$connect();
    }
}
```

> #### 7. NestJS Criar e Implentar Resource Produto
* voltar para o diretorio do projeto
```
cd .. cd ..
```

* agora sim gerar o resource
```
npx nest g resource produto --no-spec
```

* Agora foi gerado automáticamente os arquivos 
* <b> ( Apagar a pasta Entity ) </b>
* <b> ( Não mexer )  produto.controller.ts, </b>
* produto.module.ts,
* produto.service.ts
* Dto

> ##### 7.1 Vamos começar editando nosso modelo de produto

* create.produto.dto.ts
```
export interface CreateProdutoDto {
    nome: string
    descricao: string
    preco: number
}
```

* update-produto.dto.ts
```
import { CreateProdutoDto } from './create-produto.dto';

export interface UpdateProdutoDto extends Partial<CreateProdutoDto> {
    id: number
}
```

> ##### 7.2 Atualizando Modulo

* produto.module.ts
```
import { Module } from '@nestjs/common';
import { ProdutoService } from './produto.service';
import { ProdutoController } from './produto.controller';
import { DbModule } from 'src/db/db.module';

@Module({
  imports: [DbModule],
  controllers: [ProdutoController],
  providers: [ProdutoService],
})
export class ProdutoModule {}
```

> ##### 7.3 Atualizando Modulo

* produto.service.ts
```
import { Injectable } from '@nestjs/common';
import { CreateProdutoDto } from './dto/create-produto.dto';
import { UpdateProdutoDto } from './dto/update-produto.dto';
import { PrismaService } from 'src/db/prisma.service';

@Injectable()
export class ProdutoService {
  constructor( private readonly prismaService: PrismaService ){}

  create(createProdutoDto: CreateProdutoDto) {
    return this.prismaService.produto.create({
      data: createProdutoDto,
    });
  }

  findAll() {
    return this.prismaService.produto.findMany();
  }

  findOne(id: number) {
    return this.prismaService.produto.findUnique({
      where: { id },
    });
  }

  update(id: number, updateProdutoDto: UpdateProdutoDto) {
    return this.prismaService.produto.update({
      where: { id },
      data: updateProdutoDto,
    });
  }

  remove(id: number) {
    return this.prismaService.produto.delete({
      where: { id },
    });
  }
}
```

##### 7.4 atualizar src/app.module.ts
```
import { Module } from '@nestjs/common';
import { DbModule } from './db/db.module';
import { ProdutoModule } from './produto/produto.module';

@Module({
  imports: [DbModule, ProdutoModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
```

> #### 8. NestJS rodando o projeto
```
npm run start:dev
```

#### Observações Opcionais

* Conexão com mysql
```
npx prisma init --datasource-provider mysql
```

<i> Nesse exemplo de conexão com mysql usuario:root,sem-senha@localhost:3306/banco__criado__ou__criar </i>
```
DATABASE_URL="mysql://root:@localhost:3306/api__02"
```

* exemplo 2
```
DATABASE_URL="mysql://root:@localhost:3306/appi0101"
```

<b> Opcional caso queira dar uma olhadinha usando o prisma studio </b>
``` ok Prisma
npx prisma studio
```
