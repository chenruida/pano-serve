import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { jwtConstants } from 'src/config/constants';
import { JWTStrategy } from 'src/services/auth/jwt.strategy';
import { AuthService } from '../services/auth/auth.service';
import { UsersModule } from './users.module';

@Module({
  imports: [
    PassportModule.register({ defaultStrategy: 'jwt' }),
    JwtModule.register({
      secret: jwtConstants.secret,
      signOptions: { expiresIn: '8h' }, //token过期
    }),
    UsersModule,
    PassportModule,
  ],
  providers: [AuthService, JWTStrategy],
  exports: [AuthService],
})
export class AuthModule {}
