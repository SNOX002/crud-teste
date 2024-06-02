import { InputType, Field, PartialType } from '@nestjs/graphql';
//User
@InputType()
export class CreateUserDTO {
  @Field(() => String, { description: 'Example field (placeholder)' })
  name: string;

  @Field(() => String, { description: 'Example field (xxx@gmail.com)' })
  email: string;

  @Field(() => String, { description: 'Example field ("blabla123")' })
  password: string;
}

@InputType()
export class UpdateUserDTO extends PartialType(CreateUserDTO) {
}


//Livros
@InputType()
export class CreateLivroDTO {
  @Field(() => String, { description: 'Auto da barca do Inferno' })
  title: string;

  @Field(() => String, { description: 'Machado d Asis' })
  author: string;
}
@InputType()
export class UpdateLivroDTO extends PartialType(CreateLivroDTO) {
}

//Alugueis
@InputType()
export class CreateAluguelDTO {
  @Field(() => String, { description: 'userID' })
  userID: string;

  @Field(() => String, { description: 'bookID' })
  bookID: string;
}

@InputType()
export class UpdateAluguelDTO extends PartialType(CreateAluguelDTO) {
  @Field(() => String, { description: 'AluguelID' })
  id: string;
}

@InputType()
//PartialType() Herda as caracteristica como opcionais
export class FindAluguel extends PartialType(CreateAluguelDTO) {
    @Field(() => String, { description: 'AluguelID' })
    id?: string;
}