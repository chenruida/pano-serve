import { Prop, Schema, SchemaFactory, raw } from '@nestjs/mongoose';
import { ApiProperty } from '@nestjs/swagger';
import { Document } from 'mongoose';

export type HotspotDocument = Hotspot & Document;
@Schema()
export class Hotspot extends Document {
  @ApiProperty({ description: '名称', type: String })
  @Prop({ required: true, type: String })
  name: string;

  @ApiProperty({
    description: '航带',
    type: raw({
      row: Number,
      clo: Number,
    }),
  })
  @Prop({
    required: true,
    type: Object,
  })
  location: {
    row: number;
    clo: number;
  };

  @ApiProperty({
    description: '位置',
  })
  @Prop({
    required: true,
    type: raw({
      x: Number,
      y: Number,
    }),
  })
  position: {
    x: number;
    y: number;
  };

  @ApiProperty({
    description: '描述',
    type: String,
  })
  @Prop({ type: String })
  content: string;

  @ApiProperty({
    description: '局部图像',
    type: String,
  })
  @Prop({ type: String })
  img: string;

  @ApiProperty({
    description: '类型',
    type: String,
  })
  @Prop({ type: String })
  type: string;
}

export const HotspotSchema = SchemaFactory.createForClass(Hotspot);
