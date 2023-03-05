import { raw } from '@nestjs/mongoose';
import { ApiProperty } from '@nestjs/swagger';

export class CreateHotspotDto {
  @ApiProperty({ description: '名称', type: String })
  name: string;

  @ApiProperty({
    description: '航带号列表',
    type: Object,
  })
  location: {
    row: number;
    clo: number;
  };

  @ApiProperty({
    description: '图像位置列表，和航带号对应',
    type: Object,
  })
  position: {
    x: number;
    y: number;
  };

  @ApiProperty({
    description: '描述',
    type: String,
  })
  content: string;

  @ApiProperty({
    description: '局部图像',
    type: String,
  })
  img: string;

  @ApiProperty({
    description: '类型',
    type: String,
  })
  type: string;
}
