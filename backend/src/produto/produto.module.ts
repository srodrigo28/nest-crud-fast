import { Module } from '@nestjs/common';
import { ProdutoService } from './produto.service';
import { ProdutoController } from './produto.controller';
import { DbModule } from 'src/db/db.module';
import { produtoRepositorio } from './produtoRepositorio';

@Module({
  imports: [DbModule],
  controllers: [ProdutoController],
  providers: [ProdutoService, produtoRepositorio],
})
export class ProdutoModule {}
