import { Controller } from '@nestjs/common';
import { Get } from '@nestjs/common';
import { ApiHeader } from '@nestjs/swagger';
import { TreeService } from 'src/services/tree/tree.service';

@ApiHeader({
  name: '树形图API',
  description: '',
})
@Controller('tree')
export class TreeController {
  constructor(private readonly treeService: TreeService) {}

  @Get('findAll')
  async findAll() {
    return this.treeService.findAll();
  }
}
