import { Body, Controller, Post, Query } from '@nestjs/common';
import { Get } from '@nestjs/common';
import { ApiBody, ApiQuery, ApiResponse, ApiTags } from '@nestjs/swagger';
import { TreeUpdate } from 'src/models/tree-update.model';
import { TreeService } from 'src/services/tree/tree.service';

@ApiTags('树形图API')
@Controller('tree')
export class TreeController {
  constructor(private readonly treeService: TreeService) {}

  /**
   * 获取树形图
   * @returns 树形图
   */
  @ApiResponse({ description: '获取树形图' })
  @Get('findAll')
  async findAll() {
    return this.treeService.findAll();
  }

  /**
   *  删除树
   * @param sid id
   * @returns 树列表
   */
  @ApiQuery({ name: 'sid' })
  @ApiResponse({ description: '更新树' })
  @Get('delete')
  async delete(@Query() query) {
    console.log(query.sid);
    // const sid = query.sid;
    // return await this.delete(sid);
  }

  /**
   * 更新树
   * @param sid 节点id
   * @param tree 树
   * @returns
   */
  @ApiBody({ type: TreeUpdate })
  @ApiResponse({ description: '更新树' })
  @Post('update')
  async update(@Body() updateBody: TreeUpdate) {
    return this.update(updateBody);
  }
}
