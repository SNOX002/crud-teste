import { Module } from '@nestjs/common';
import { DataModule } from './data.module';
import { UserService } from '@application/services/usuarios/users.service';
import { LivrosController } from '@application/services/livros/livros.controller';
import { AluguelController } from '@application/services/alugueis/alugueis.controller';
import { LivroService } from '@application/services/livros/livro.service';
import { AluguelService } from '@application/services/alugueis/aluguel.service';
import { UserController } from '@application/services/usuarios/usuarios.controller';

@Module({
  controllers: [UserController, LivrosController, AluguelController],
  imports: [DataModule], 
  providers: [UserService, LivroService, AluguelService]
})
export class AppModule {}
