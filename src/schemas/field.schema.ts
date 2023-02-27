import { Prop, Schema, SchemaFactory, raw } from '@nestjs/mongoose';
import { ApiProperty } from '@nestjs/swagger';
import { Document } from 'mongoose';
import { FiledConfig } from 'src/models/filed-config.model';

export type FieldDocument = Field & Document;

@Schema()
export class Field extends Document {
  @ApiProperty({ description: '字段配置' })
  @Prop({ required: true, type: FiledConfig })
  config: FiledConfig;

  @ApiProperty({ description: '占位符' })
  @Prop(
    raw({
      prepend: String,
      append: String,
    }),
  )
  slot: {
    prepend: string;
    append: string;
  };

  @ApiProperty({ description: '占位符' })
  @Prop()
  placeholder: string;

  @ApiProperty({ description: '能否清空' })
  @Prop({ default: true })
  clearable: boolean;

  @ApiProperty({ description: '前缀' })
  @Prop({ default: false })
  prefixIcon: string;

  @ApiProperty({ description: '后缀' })
  @Prop({ default: false })
  suffixIcon: string;

  @ApiProperty({ description: '最大长度' })
  @Prop({ default: false })
  maxlength: string;

  @ApiProperty({ description: '最大长度' })
  @Prop({ default: false })
  showWordLimit: boolean;

  @ApiProperty({ description: '只读' })
  @Prop({ default: false })
  readonly: boolean;

  @ApiProperty({ description: '禁用' })
  @Prop({ default: false })
  disabled: boolean;

  @Prop()
  @ApiProperty({ description: '绑定数据名称' })
  vModel: string;
}

export const FieldSchema = SchemaFactory.createForClass(Field);
