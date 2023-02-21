import { ApiProperty } from '@nestjs/swagger';
import { Tree } from 'src/schemas/tree.schema';

export class TreeUpdate {
  @ApiProperty({ description: 'objectid' })
  sid: string;
  @ApiProperty({ description: 'tree' })
  tree: Tree;
}
