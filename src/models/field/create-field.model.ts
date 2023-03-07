import { ApiProperty } from '@nestjs/swagger';
import { FiledConfig } from './filed-config.model';
import { raw } from '@nestjs/mongoose';

export class CreateFieldDto {
  @ApiProperty({ description: '字段配置', type: FiledConfig })
  config: FiledConfig;

  @ApiProperty({
    description: '占位符',
    type: raw({
      prepend: String,
      append: String,
    }),
  })
  slot: {
    prepend: string;
    append: string;
  };

  @ApiProperty({ description: '占位符' })
  placeholder: string;

  @ApiProperty({ description: '能否清空' })
  clearable: boolean;

  @ApiProperty({ description: '前缀' })
  prefixIcon: string;

  @ApiProperty({ description: '后缀' })
  suffixIcon: string;

  @ApiProperty({ description: '最大长度' })
  maxlength: string;

  @ApiProperty({ description: '最大长度' })
  showWordLimit: boolean;

  @ApiProperty({ description: '只读' })
  readonly: boolean;

  @ApiProperty({ description: '禁用' })
  disabled: boolean;

  @ApiProperty({ description: '绑定数据名称' })
  vModel: string;
}
