import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ProdutoService } from './produto.service';
import { UpdateProdutoDto } from './dto/Update-produtoDto';
import { CreateProdutoDto } from './dto/CreateProdutoDto';
import { produtoRepositorio } from './produtoRepositorio';

@Controller('produto')
export class ProdutoController {
  constructor(private readonly produtoService: ProdutoService) {}

  // lembrar de implementar o produtoRepositorio
  // const usuarioExistis = await this.repo.buscarPorEmail(usuario.email);

  @Post()
  create(@Body() createProdutoDto: CreateProdutoDto) {
    return this.produtoService.create(createProdutoDto);
  }

  @Get()
  findAll() {
    return this.produtoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.produtoService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateProdutoDto: UpdateProdutoDto) {
    return this.produtoService.update(+id, updateProdutoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.produtoService.remove(+id);
  }
}
