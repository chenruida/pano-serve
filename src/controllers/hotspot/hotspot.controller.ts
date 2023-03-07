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
import { HotspotService } from 'src/services/hotspot/hotspot.service';
import { CreateHotspotDto } from 'src/models/hotspot/create-hotspot.dto';
import { UpdateHotspotDto } from 'src/models/hotspot/update-hotspot.dto';
import {
  ApiBody,
  ApiOperation,
  ApiParam,
  ApiQuery,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { query } from 'express';

@ApiTags('热点API')
@Controller('hotspot')
export class HotspotController {
  constructor(private readonly hotspotService: HotspotService) {}

  @ApiOperation({
    tags: ['创建热点'],
    description: '创建热点',
    deprecated: false,
  })
  @ApiBody({ type: CreateHotspotDto })
  @ApiResponse({ description: '创建热点' })
  @Post()
  create(@Body() createHotspotDto: CreateHotspotDto) {
    return this.hotspotService.create(createHotspotDto);
  }

  @ApiOperation({
    tags: ['通过 id列表 获取热点'],
    description: '通过 id列表 获取热点',
    deprecated: false,
  })
  @ApiQuery({ name: 'ids', type: [String] })
  @ApiResponse({ description: '热点列表' })
  @Get()
  findAll(@Query('ids') query) {
    return this.hotspotService.findByIds(query.ids);
  }

  @ApiOperation({
    tags: ['通过 id 获取单个热点'],
    description: '通过 id 获取单个热点',
    deprecated: false,
  })
  @Get(':id')
  @ApiResponse({ description: '通过id查找 单个' })
  @ApiParam({ name: 'id' })
  findOne(@Param('id') id: string) {
    return this.hotspotService.findOne(id);
  }

  @ApiOperation({
    tags: ['更新'],
    description: '更新',
    deprecated: false,
  })
  @Patch(':id')
  @ApiResponse({ description: '更新' })
  @ApiParam({ name: 'id', type: String })
  @ApiBody({ type: UpdateHotspotDto })
  update(@Param('id') id: string, @Body() updateHotspotDto: UpdateHotspotDto) {
    return this.hotspotService.update(id, updateHotspotDto);
  }

  @Delete(':id')
  @ApiResponse({ description: '删除' })
  @ApiParam({ name: 'id', type: String })
  remove(@Param('id') id: string) {
    return this.hotspotService.remove(id);
  }
}
