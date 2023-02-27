import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { HotspotService } from 'src/services/hotspot/hotspot.service';
import { CreateHotspotDto } from 'src/models/hotspot/create-hotspot.dto';
import { UpdateHotspotDto } from 'src/models/hotspot/update-hotspot.dto';
import {
  ApiBody,
  ApiParam,
  ApiQuery,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';

@ApiTags('热点API')
@Controller('hotspot')
export class HotspotController {
  constructor(private readonly hotspotService: HotspotService) {}

  @ApiBody({ type: CreateHotspotDto })
  @ApiResponse({ description: '创建商品信息' })
  @Post()
  create(@Body() createHotspotDto: CreateHotspotDto) {
    return this.hotspotService.create(createHotspotDto);
  }

  @ApiResponse({ description: '获取全部商品' })
  @Get()
  findAll() {
    return this.hotspotService.findAll();
  }

  @Get(':id')
  @ApiResponse({ description: '通过id查找' })
  @ApiParam({ name: 'id' })
  findOne(@Param('id') id: string) {
    return this.hotspotService.findOne(id);
  }

  @Patch(':id')
  @ApiResponse({ description: '更新' })
  @ApiParam({ name: 'id' })
  update(@Param('id') id: string, @Body() updateHotspotDto: UpdateHotspotDto) {
    return this.hotspotService.update(id, updateHotspotDto);
  }

  @Delete(':id')
  @ApiResponse({ description: '删除' })
  @ApiParam({ name: 'id' })
  remove(@Param('id') id: string) {
    return this.hotspotService.remove(id);
  }
}
