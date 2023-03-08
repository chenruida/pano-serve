import { Body, Controller, Post } from '@nestjs/common';
import { ApiBody, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import LoginUserDto from 'src/models/user/login.model';
import { AuthService } from 'src/services/auth/auth.service';
import { UsersService } from 'src/services/users/users.service';

@ApiTags('用户')
@Controller('user')
export class UserController {
  constructor(
    private readonly authService: AuthService,
    private readonly usersService: UsersService,
  ) {}

  @ApiOperation({
    tags: ['登录'],
    description: '登录',
    deprecated: false,
  })
  @ApiResponse({ description: '登录' })
  @ApiBody({ type: LoginUserDto })
  @Post('login')
  async login(@Body() loginDto: LoginUserDto) {
    const authResult = await this.authService.validateUser(
      loginDto.username,
      loginDto.password,
    );
    if (authResult != null) {
      return this.authService.certificate(authResult);
    }
    return '登陆失败，账户密码错误！';
  }
}
