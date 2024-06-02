import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { LivroService } from './livro.service';
import { CreateLivroDTO, UpdateLivroDTO } from '@application/dto/general-models';

@Controller('livros')
export class LivrosController {
    constructor( private readonly livroService: LivroService){}

    @Post()
    create(@Body() createLivroDTO: CreateLivroDTO) {
        return this.livroService.create(createLivroDTO);
      }

    @Get()
    findAll(){
        return this.livroService.findAll();
      }
      
    @Get(':id')
    findOne(@Param('id') id: string) {
    return this.livroService.findOne(id);
    }

    @Put(':id')
    update(@Param('id') id: string, @Body() updateLivroDTO: UpdateLivroDTO) {
        return this.livroService.update(id, updateLivroDTO);
      }

    @Delete(':id')
    remove(@Param('id') id: string) {
    return this.livroService.remove(id);
    }
}
