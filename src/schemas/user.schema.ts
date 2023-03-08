import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ApiProperty } from '@nestjs/swagger';
import { Document } from 'mongoose';

export type UserDocument = User & Document;

@Schema()
export class User extends Document {
  @ApiProperty({ description: '用户名', type: String })
  @Prop({ required: true })
  username: string;

  @ApiProperty({ description: '密码', type: String })
  @Prop({ required: true })
  password: string;

  @ApiProperty({ description: '角色', type: String })
  @Prop({ required: true })
  role: string;

  @ApiProperty({ description: '姓名', type: String })
  @Prop({ required: false })
  name: string;
}
export const UserSchema = SchemaFactory.createForClass(User);
