import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ApiProperty } from '@nestjs/swagger';
import { Document } from 'mongoose';

export type PanoDocument = Pano & Document;
@Schema()
export class Pano extends Document {
  @ApiProperty({ description: '名称', type: String })
  @Prop({ required: true, type: String })
  name: string;

  @ApiProperty({ description: '热点列表', type: [String] })
  @Prop({ required: true, type: [String] })
  hotSpot: [string];

  @ApiProperty({ description: '名称', type: String })
  @Prop({ required: true, type: String })
  urls: string;
}
export const PanoSchema = SchemaFactory.createForClass(Pano);
