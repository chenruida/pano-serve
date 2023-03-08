import { ApiProperty } from '@nestjs/swagger';

export default class LoginUserDto {
  @ApiProperty({ name: 'username', type: String, default: 'admin' })
  username: string;
  @ApiProperty({ name: 'password', type: String, default: 'admin' })
  password: string;
}
