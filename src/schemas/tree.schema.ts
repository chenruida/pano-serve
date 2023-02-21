import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ApiProperty } from '@nestjs/swagger';
import { Document } from 'mongoose';

export type TreeDocument = Tree & Document;

@Schema()
export class Tree extends Document {
  /**
   * 标签
   * @example
   */
  @ApiProperty({ description: '标签' })
  @Prop({ required: true })
  label: string;

  /**
   * 子节点
   * @example
   */
  @ApiProperty({ description: '子节点' })
  @Prop()
  children: [];

  /**
   * 节点还是商品
   * @example
   */
  @ApiProperty({ description: '节点还是商品' })
  @Prop({ default: true })
  isNode: boolean;

  /**
   * 商品ID
   * @example
   */
  @ApiProperty({ description: '商品ID' })
  @Prop()
  objId: number;
}

export const TreeSchema = SchemaFactory.createForClass(Tree);
