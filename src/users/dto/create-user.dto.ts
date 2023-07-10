import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @ApiProperty({
    default: 'test@mail.ru',
  })
  email: string;

  @ApiProperty({
    default: 'John Key',
  })
  fullname: string;

  @ApiProperty({
    default: '123test',
  })
  password: string;
}
