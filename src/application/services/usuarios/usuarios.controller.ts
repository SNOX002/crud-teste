import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { UserService } from '@application/services/usuarios/users.service';
import { CreateUserDTO, UpdateUserDTO } from '@application/dto/general-models';

@Controller('/usuario')
export class UserController {
    constructor( private readonly userService: UserService){}

    @Post()
    create(@Body() createUserDTO: CreateUserDTO) {
        return this.userService.create(createUserDTO);
      }

    @Get()
    findAll(){
        return this.userService.findAll();
      }
      
    @Get(':id')
    findOne(@Param('id') id: string) {
    return this.userService.findOne(id);
    }

    @Put(':id')
    update(@Param('id') id: string, @Body() updateUserDTO: UpdateUserDTO) {
        return this.userService.update(id, updateUserDTO);
      }

    @Delete(':id')
    remove(@Param('id') id: string) {
    return this.userService.remove(id);
    }
}
