import { Controller, Post, Query } from '@nestjs/common';
import { Get } from '@nestjs/common';
import { ApiHeader } from '@nestjs/swagger';
import { Tree } from 'src/schemas/tree.schema';
import { TreeService } from 'src/services/tree/tree.service';

@ApiHeader({
  name: '树形图API',
  description: '',
})
@Controller('tree')
export class TreeController {
  constructor(private readonly treeService: TreeService) {}

  /**
   * 获取树形图
   * @returns 树形图
   */
  @Get('findAll')
  async findAll() {
    return this.treeService.findAll();
  }

  /**
   *  删除树
   * @param sid id
   * @returns 树列表
   */
  @Post('delete')
  async delete(@Query() sid: string) {
    return this.delete(sid);
  }

  /**
   * 更新树
   * @param sid 节点id
   * @param tree 树
   * @returns
   */
  @Post('update')
  async update(@Query() sid: string, tree: Tree) {
    return this.update(sid, tree);
  }
}
