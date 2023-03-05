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
import { ApiQuery, ApiTags } from '@nestjs/swagger';

@ApiTags('商品')
@Controller('goods')
export class GoodsController {
  constructor(private readonly goodsService: GoodsService) {}

  @Post()
  create(@Body() createGoodDto: CreateGoodDto) {
    return this.goodsService.create(createGoodDto);
  }

  @Get()
  @ApiQuery({ name: 'pageNumber', type: Number })
  @ApiQuery({ name: 'pageSize', type: Number })
  findAll(@Query() query) {
    return this.goodsService.findAll(+query.pageNumber, +query.pageSize);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.goodsService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateGoodDto: UpdateGoodDto) {
    return this.goodsService.update(id, updateGoodDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.goodsService.remove(id);
  }
}
