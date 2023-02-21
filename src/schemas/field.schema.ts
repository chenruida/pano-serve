import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { FiledConfig } from 'src/models/filed-config.model';

export type FieldDocument = Field & Document;

@Schema()
export class Field extends Document {
  /**
   * 字段配置
   * @example
   */
  @Prop({ required: true })
  config: FiledConfig;

  /**
   * 槽方法
   * @example
   */
  // @Prop()
  // slot: object;

  /**
   * 占位符
   * @example
   */
  @Prop()
  placeholder: string;

  /**
   * clearable
   * @example
   */
  @Prop({ default: true })
  clearable: boolean;

  @Prop({ required: false, default: '' })
  prefixIcon: string;

  @Prop({ required: false, default: '' })
  suffixIcon: string;

  @Prop({ name: '', required: false, default: null })
  maxlength: string;

  @Prop()
  showWordLimit: boolean;

  @Prop()
  readonly: boolean;

  @Prop()
  disabled: boolean;

  @Prop()
  __vModel__: string;
}

export const FieldSchema = SchemaFactory.createForClass(Field);
