import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { AluguelService } from './aluguel.service';
import { CreateAluguelDTO, FindAluguel, UpdateAluguelDTO } from '@application/dto/general-models';
//npx nest generate service aluguel

@Controller('aluguel')
export class AluguelController {
    constructor( private readonly aluguelService: AluguelService){}

    @Post()
    create(@Body() createAluguelDTO: CreateAluguelDTO) {
        return this.aluguelService.create(createAluguelDTO);
      }

    @Get()
    findAll(){
        return this.aluguelService.findAll();
      }
      
    @Get(':id')
    findOne(@Body() findAluguel: FindAluguel) {
    return this.aluguelService.findOne(findAluguel);
    }

    @Put(':id')
    update(@Param('id') id: string, @Body() updateAluguelDTO: UpdateAluguelDTO) {
        return this.aluguelService.update(id);
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
    return this.aluguelService.delete(id);
    }
}