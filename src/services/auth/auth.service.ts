import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { User } from 'src/schemas/user.schema';
import { UsersService } from '../users/users.service';

@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UsersService,
    private readonly jwtService: JwtService,
  ) {}
  async validateUser(username: string, pass: string): Promise<User | null> {
    const user = await this.usersService.findOne(username);
    if (user && user.password === pass) {
      // const { password, ...result } = user;
      return user;
    }
    return null;
  }

  async certificate(user: User) {
    const token = this.jwtService.sign({
      username: user.username,
      realName: user.name,
      role: user.role,
    });
    return token;
  }
}
