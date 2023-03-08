import {
  Body,
  Controller,
  Delete,
  Param,
  Post,
  UseGuards,
} from '@nestjs/common';
import { Get } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import {
  ApiBearerAuth,
  ApiBody,
  ApiOperation,
  ApiQuery,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { TreeUpdate } from 'src/models/tree/tree-update.model';
import { TreeService } from 'src/services/tree/tree.service';

@ApiBearerAuth()
@ApiTags('树形图')
@Controller('tree')
@UseGuards(AuthGuard('jwt'))
export class TreeController {
  constructor(private readonly treeService: TreeService) {}

  @ApiOperation({
    tags: ['获取树形图'],
    description: '获取树形图',
    deprecated: false,
  })
  @ApiResponse({ description: '获取树形图' })
  @Get()
  @UseGuards(AuthGuard('jwt'))
  async findAll() {
    return this.treeService.findAll();
  }

  @ApiOperation({
    tags: ['删除树节点'],
    description: '删除树节点',
    deprecated: false,
  })
  @ApiQuery({ name: 'id' })
  @ApiResponse({ description: '删除树节点' })
  @Delete(':id')
  @UseGuards(AuthGuard('jwt'))
  async delete(@Param('id') id: string) {
    return this.treeService.delete(id);
  }

  @ApiOperation({
    tags: ['更新树'],
    description: '更新树',
    deprecated: false,
  })
  @ApiBody({ type: TreeUpdate })
  @ApiResponse({ description: '更新树' })
  @Post('update')
  @UseGuards(AuthGuard('jwt'))
  async update(@Body() updateBody: TreeUpdate) {
    return this.treeService.update(updateBody);
  }
}
