import { ApiProperty } from '@nestjs/swagger';

export class CreateGoodDto {
  @ApiProperty({ description: '名称', type: String })
  name: string;

  @ApiProperty({ description: '字段列表', type: [String] })
  fields: [string];

  @ApiProperty({ description: '属性' })
  attributeId: string;

  @ApiProperty({ description: '全景' })
  panos: [
    {
      name: string;
      sid: string;
    },
  ];
}
