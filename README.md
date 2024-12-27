> #### 1. Criar aplicação
* criando projeto no terminal
```
npx nest new app2
```

* No diretório src/ apagar os arquivos
* app.controller.spec.ts
* app.service.ts
* app.controller.ts

* Exemplo ( atualizar ) src/app.module.ts
```
import { Module } from '@nestjs/common';

@Module({
  imports: [],
  controllers: [],
  providers: [],
})
export class AppModule {}
```

> #### 2. Permitir o cors
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

#### 3. Instalar o prisma Provider

* <b>01</b> criando o projeto cd apps/backend
```ok
npm install prisma -D
```

*<b>02</b> Methodo de conexão banco de Dados iniciando projeto sqlite
```
npx prisma init --datasource-provider sqlite
```
|| <br>
```ok
npx prisma init --datasource-provider mysql
```
* <b>03</b> Dentro da pasta prisma/shema.prisma
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

* <b>04</b> Arquivo .env gerado automáticamente configurar de acordo com o banco

<i> Nesse exemplo de conexão com mysql usuario:root,sem-senha@localhost:3306/banco__criado__ou__criar </i>
```
DATABASE_URL="mysql://root:@localhost:3306/api__02"
```

* exemplo 2
```
DATABASE_URL="mysql://root:@localhost:3306/appi0101"
```

* <b>05</b> Rodando nosso primeiro migrate criando a tabela
``` ok
npx prisma migrate dev
```

<b> Opcional Caso der Error </b>
``` ok Prisma
npm i prisma@6.1.0 -D --silent
```

<b> Opcional caso queira dar uma olhadinha usando o prisma studio </b>
``` ok Prisma
npx prisma studio
```

#### 4. Instar os modulo DB

> ##### 4.1 criando no nosso modulo de conexão
```
npx nest g module db
```

> * entrar na pasta db
```
cd src/db
```

> * entrar na pasta db
```
npx nest g service prisma --flat --no-spec
```

> ##### 4.2 entrar na src/db/db.module.ts
```
import { Module } from '@nestjs/common';
import { PrismaService } from './prisma.service';

@Module({
  providers: [PrismaService],
  exports: [PrismaService]
})
export class DbModule {}
```

> ##### 4.3 entrar na src/db/prisma.service.ts
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

#### 5. Criar e Implentar Resource Produto Entidades
* voltar para o diretorio do projeto
```
cd .. cd ..
```

* agora sim gerar o resource
```
npx nest g resource produto --no-spec
```
* Criando 
* <b> ( Apagar a pasta Entity ) </b>
* <b> ( Não mexer )  produto.controller.ts, </b>
* produto.module.ts,
* produto.service.ts

##### 5.1 entrar na src/produto/dto/
* create.produto.dto.ts
```
export interface CreateProdutoDto {
    nome: string
    descricao: string
    preco: number
}
```
##### 5.2 entrar na src/produto/dto/
* update-produto.dto.ts
```
import { CreateProdutoDto } from './create-produto.dto';

export interface UpdateProdutoDto extends Partial<CreateProdutoDto> {
    id: number
}
```
##### 5.3 entrar na src/produto/
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

##### 5.4 atualizar src/app.module.ts
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

> #### 6. rodando o projeto
```
npm run start:dev
```
