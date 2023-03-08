import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UserSchema } from 'src/schemas/user.schema';
import { UsersService } from 'src/services/users/users.service';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'user', schema: UserSchema }])],
  // controllers: [UserController],
  providers: [UsersService],
  exports: [UsersService],
})
export class UsersModule {}
