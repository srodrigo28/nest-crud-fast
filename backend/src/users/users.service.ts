import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { PrismaService } from 'src/db/prisma.service';
import { errorUserExistis } from './erros/errorUserExistis';
import { errorEmailExistis } from './erros/errorEmailExistis';
import { errorNotFound } from 'src/errors/errorNotFound';

@Injectable()
export class UsersService {
  constructor(private readonly prismaService: PrismaService){}

  // inserir com validação
  async create(createUserDto: CreateUserDto) {
      
      const userExiste = await this.prismaService.users.findUnique({
        where: { nome: createUserDto.nome }
      })

      const userEmail = await this.prismaService.users.findUnique({
        where: { email: createUserDto.email}
      })

      if(userEmail){
        throw new errorEmailExistis(createUserDto.email)
      }

      if(userExiste){
        throw new errorUserExistis(createUserDto.nome)
      }

      return this.prismaService.users.create({
        data: createUserDto
      });
  }

  // buscar todos
  findAll() {
    return this.prismaService.users.findMany();
  }

  // buscar por id
  findOne(id: number) {
    return this.prismaService.users.findUnique({
      where: { id }
    });
  }

  // veferificar antes de salvar
  async update(id: number, updateUserDto: UpdateUserDto) {
    
    const existeUser = await this.prismaService.users.findUnique({
      where: { id }
    })

    if(!existeUser){
      throw new errorUserExistis( `Produto ${id} não encontrado` ) 
    }
    
    return this.prismaService.users.update({
      where: { id },
      data: updateUserDto,
    })
  }

  // verificar antes de remover
  async remove(id: number) {

    const deleteExists = await this.prismaService.users.findUnique({
      where: { id },
    });

    if(!deleteExists){
      throw new errorNotFound('User', 'id', id)
    }

    return this.prismaService.produto.delete({
      where: { id }
    })
  }
}
