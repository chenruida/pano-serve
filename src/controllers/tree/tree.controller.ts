import { Controller } from '@nestjs/common';
import { Get } from '@nestjs/common';
import { TreeService } from 'src/services/tree/tree.service';

@Controller('tree')
export class TreeController {
  constructor(private readonly treeService: TreeService) {}
  @Get('findAll')
  async findAll() {
    return this.treeService.findAll();
  }
}
