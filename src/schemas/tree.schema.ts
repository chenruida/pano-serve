import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type TreeDocument = Tree & Document;

@Schema()
export class Tree extends Document {
  @Prop({ required: true })
  id: number;

  @Prop({ required: true })
  label: string;

  // 子节点
  @Prop()
  children: [];

  //是节点还是商品，默认节点
  @Prop({ default: true })
  isNode: boolean;

  // 商品id
  @Prop()
  objId: number;
}

export const TreeSchema = SchemaFactory.createForClass(Tree);
