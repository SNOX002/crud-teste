import { Injectable } from '@nestjs/common';
import { PrismaService } from 'prisma/client/prisma.service';
import { CreateUserDTO } from '@application/dto/general-models';
import { UpdateUserDTO } from '@application/dto/general-models';

@Injectable()
export class UserService {
    constructor( private readonly prisma : PrismaService) {}

    async create({email, name, password}: CreateUserDTO){
        return await this.prisma.usuario.create( { 
            data: {
                name, 
                email, 
                password
            } 
        });
    }

    async findAll(){
        return await this.prisma.usuario.findMany();
    }

    async findOne(id: string) {
        return await this.prisma.usuario.findFirst({where: {id} });
    }

    async update(id: string, {email, name, password}: UpdateUserDTO) {
        return await this.prisma.usuario.update({
            where: { id },
            data:{  email, 
                    name,
                    password 
                }
        });
    }
    async remove(id: string){
        return await this.prisma.usuario.delete({where: {id} });
    }
}
