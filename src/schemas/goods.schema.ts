import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ApiProperty } from '@nestjs/swagger';
import { Document } from 'mongoose';

export type GoodsDocument = Goods & Document;

@Schema()
export class Goods extends Document {
  @ApiProperty({ description: '名称', type: String })
  @Prop({ required: true, type: String })
  name: string;

  @ApiProperty({ description: '字段列表', type: [String] })
  @Prop({ required: true, type: [String] })
  fields: [string];

  @ApiProperty({ description: '属性' })
  @Prop({ required: false, type: String })
  attributeId: string;

  @ApiProperty({ description: '全景' })
  @Prop({
    required: false,
    type: [String],
  })
  panos: [string];
}

export const GoodsSchema = SchemaFactory.createForClass(Goods);
