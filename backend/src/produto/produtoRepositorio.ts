import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/db/prisma.service';
import { CreateProdutoDto } from './dto/CreateProdutoDto';

@Injectable()
export class produtoRepositorio {
    constructor(private readonly prisma: PrismaService) {}

    async buscarPorNome(nome: string): Promise<CreateProdutoDto | null>{
        return this.prisma.produto.findUnique({
            where: { nome }
        })
    }
}
