import { UserEntity } from './../entities/user.entity';
import { IsEmail, Length } from 'class-validator';
import { UniqueOnDatabase } from 'src/auth/validations/UniqueValidation';

export class CreateUserDto {
  @Length(2)
  fullName: string;

  @IsEmail(undefined, { message: 'Неверная почта' })
  @UniqueOnDatabase(UserEntity, {
    message: 'Такая почта уже есть',
  })
  email: string;

  @Length(6, 32, { message: 'Пароль должен быть минимум 6 символов' })
  password?: string;
}
