import { Injectable } from '@nestjs/common';
import { CreateProdutoDto } from './dto/CreateProdutoDto';
import { UpdateProdutoDto } from './dto/Update-produtoDto';
import { PrismaService } from 'src/db/prisma.service';
import { errorProdutoExits } from './erros/errorProdutsExists';
import { errorNotFound } from '../errors/errorNotFound';

@Injectable()
export class ProdutoService {
  constructor(private readonly prismaService: PrismaService){}

 // Cadastro com verificação
 async create(createProdutoDto: CreateProdutoDto) {

    const productExists = await this.prismaService.produto.findUnique({
      where: { nome: createProdutoDto.nome }
    })

    if(productExists){
      throw new errorProdutoExits(createProdutoDto.nome)
    }

    return this.prismaService.produto.create({
      data: createProdutoDto,
    });
  }

  // Listando todos
  findAll() {
    return this.prismaService.produto.findMany();
  }

  // listando somente 1
  findOne(id: number) {
    const user = this.prismaService.users.findUnique({ where: {id} })
    if(!user){
      throw new errorNotFound("Esse produto não existe ", 'id',  id );
    }

    return this.prismaService.produto.findUnique({
      where: { id }
    });
  }

  // Update com verificação antes
  async update(id: number, updateProdutoDto: UpdateProdutoDto) {

    const existingProduto = await this.prismaService.produto.findUnique({
      where: { id },
    });
  
    if (!existingProduto) {
      throw new errorProdutoExits(`Produto com ID ${id} não encontrado.`);
    }

    return this.prismaService.produto.update({
      where: { id },
      data: updateProdutoDto,
    });
  }

  // Deelete com verificação antes.
  async remove(id: number) {
    const existingProduto = await this.prismaService.produto.findUnique({
      where: { id },
    });
  
    if (!existingProduto) {
      throw new errorNotFound('Produto com ID', 'id', id);
    }

    return this.prismaService.produto.delete({
      where: { id },
    });
  }
}