import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

export type GoodsDocument = Goods & Document;

@Schema()
export class Goods extends Document {
  @Prop({ required: true })
  config: string;
}

export const GoodsSchema = SchemaFactory.createForClass(Goods);
