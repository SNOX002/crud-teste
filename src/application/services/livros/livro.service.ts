
import { CreateLivroDTO, UpdateLivroDTO } from '@application/dto/general-models';
import { PrismaService } from 'prisma/client/prisma.service';
import { Injectable } from '@nestjs/common';
//npx nest generate service livros

@Injectable()
export class LivroService {
    constructor (private readonly prisma: PrismaService) {}

    async create({author, title}:CreateLivroDTO){
        return await this.prisma.livro.create({
            data: {
                author,
                title
            }
        });
    }

    async findAll(){
        return await this.prisma.livro.findMany(); 
    }

    async findOne(id: string) {
        return await this.prisma.livro.findFirst({where: {id}}); 
    }
    async update(id: string, {author, title }:UpdateLivroDTO){
        return await this.prisma.livro.update({
            where: {id},
            data: {
                 author,
                 title
            }
        }); 
    }
    async remove(id: string){
        return await this.prisma.livro.delete({
            where: {id}
        }); 
    }
}
