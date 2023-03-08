import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { UserDocument } from 'src/schemas/user.schema';

export type User = any;

@Injectable()
export class UsersService {
  constructor(@InjectModel('user') private userModel: Model<UserDocument>) {}

  async findOne(username: string): Promise<User | undefined> {
    return await this.userModel.findOne({
      usernma: { $eq: username },
    });
  }
}
