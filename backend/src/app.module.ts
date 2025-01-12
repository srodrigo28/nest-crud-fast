import { Module } from '@nestjs/common';
import { DbModule } from './db/db.module';
import { ProdutoModule } from './produto/produto.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [DbModule, ProdutoModule, UsersModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
