import { CreateAluguelDTO, FindAluguel, UpdateAluguelDTO } from '@application/dto/general-models';
import { PrismaService } from 'prisma/client/prisma.service';
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { title } from 'process';

@Injectable()
export class AluguelService {
    constructor( private readonly prisma: PrismaService){}

    async create({bookID, userID}: CreateAluguelDTO){
        const livroAlugado = await this.prisma.aluguel.findFirst({
            where: { bookID, available: false },
          });

        if (livroAlugado) {
        throw new HttpException('Livro já está alugado', HttpStatus.BAD_REQUEST);
        }

        const startDate = new Date();
        const returnDate = new Date(startDate);
        returnDate.setDate(startDate.getDate() + 7);

        const retorno = await this.prisma.aluguel.create({
            
            data: {
                available: false,
                bookID,
                startDate,
                userID,              
                returnDate,   
            },
        });

        const livro = await this.prisma.livro.findUnique({ where: { id: bookID } });
        // Criando um novo objeto com todas as propriedades do retorno e a nova propriedade 'tittle'
        const retornoComTitulo = { ...retorno, tittle: livro.title };

        return retornoComTitulo;
    }

    async findAll(){
        return await this.prisma.aluguel.findMany();
    }

    async findOne({ id, bookID, userID}: FindAluguel) {
        const where: any = {};

        if (id) {
        where.id = id;
        } else if (bookID) {
        where.bookID = bookID;
        } else if (userID) {
        where.userID = userID;
        }

        if (Object.keys(where).length === 0) {
        throw new HttpException('No filter provided', HttpStatus.BAD_REQUEST);
        }

        return await this.prisma.aluguel.findMany({ where });
    }
    
    async update(id: string){

        return await this.prisma.aluguel.update({
            where: {id},
            data: {
                available: true,
                returnDate: new Date()
            }
        })
    }
    async delete(id: string){
        return await this.prisma.aluguel.delete({where: {id}});
    }
}

