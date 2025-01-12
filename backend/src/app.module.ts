import { Module } from '@nestjs/common';
import { DbModule } from './db/db.module';
import { ProdutoModule } from './produto/produto.module';
import { UsersModule } from './users/users.module';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [DbModule, ProdutoModule, UsersModule, 
    JwtModule.register(
      { global: true, 
        secret: 'uva123', 
        signOptions: { expiresIn: '1d'} 
      })
    ],
  controllers: [],
  providers: [],
})

export class AppModule {}
