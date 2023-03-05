import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
} from '@nestjs/common';
import { GoodsService } from 'src/services/goods/goods.service';
import { CreateGoodDto } from 'src/models/goods/create-good.dto';
import { UpdateGoodDto } from 'src/models/goods/update-good.dto';
import {
  ApiBody,
  ApiInternalServerErrorResponse,
  ApiOperation,
  ApiParam,
  ApiQuery,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';

@ApiTags('商品')
@Controller('goods')
export class GoodsController {
  constructor(private readonly goodsService: GoodsService) {}
  @ApiOperation({
    tags: ['创建商品信息'],
    description: '创建商品信息',
    deprecated: false,
  })
  @ApiBody({ type: CreateGoodDto })
  @ApiResponse({ description: '返回带id的详细', status: 200 })
  @ApiInternalServerErrorResponse({ description: '服务端异常' })
  @Post()
  create(@Body() createGoodDto: CreateGoodDto) {
    return this.goodsService.create(createGoodDto);
  }

  @Get()
  @ApiOperation({
    tags: ['获取商品信息'],
    description: '分页获取商品信息',
    deprecated: false,
  })
  @ApiQuery({ name: 'pageNumber', type: Number, description: '页码' })
  @ApiQuery({ name: 'pageSize', type: Number, description: '条数' })
  async findAll(@Query() query) {
    return await this.goodsService.findAll(+query.pageNumber, +query.pageSize);
  }

  @ApiOperation({
    tags: ['获取商品信息'],
    description: '通过id获取商品信息',
    deprecated: false,
  })
  @Get(':id')
  @ApiParam({ name: 'id', type: String, description: 'id' })
  findOne(@Param('id') id: string) {
    return this.goodsService.findOne(id);
  }

  @ApiOperation({
    tags: ['更新商品信息'],
    description: '更新指定ID的商品信息',
    deprecated: false,
  })
  @Patch(':id')
  @ApiParam({ name: 'id', type: String, description: 'id' })
  @ApiBody({
    type: UpdateGoodDto,
    description: '更新后的信息',
  })
  @ApiResponse({ description: '更新前的信息' })
  update(@Param('id') id: string, @Body() updateGoodDto: UpdateGoodDto) {
    return this.goodsService.update(id, updateGoodDto);
  }
  @ApiOperation({
    tags: ['删除商品信息'],
    description: '删除指定ID的商品信息',
    deprecated: false,
  })
  @Delete(':id')
  @ApiParam({ name: 'id', type: String, description: 'id' })
  remove(@Param('id') id: string) {
    return this.goodsService.remove(id);
  }
}
