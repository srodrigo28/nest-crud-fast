import { Injectable } from '@nestjs/common';
import { CreateProdutoDto } from './dto/CreateProdutoDto';
import { UpdateProdutoDto } from './dto/Update-produtoDto';
import { PrismaService } from 'src/db/prisma.service';

@Injectable()
export class ProdutoService {
  constructor(private readonly prismaService: PrismaService){}

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
      where: { id }
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
