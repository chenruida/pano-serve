import { ApiProperty } from '@nestjs/swagger';

export class CreatePanoDto {
  @ApiProperty({ description: '名称', type: String })
  name: string;

  @ApiProperty({ description: '热点列表', type: [String] })
  hotSpot: [string];

  @ApiProperty({ description: '名称', type: String })
  urls: string;
}
