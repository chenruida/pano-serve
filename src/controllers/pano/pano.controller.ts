import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { PanoService } from '../../services/pano/pano.service';
import { CreatePanoDto } from '../../models/pano/create-pano.dto';
import { UpdatePanoDto } from '../../models/pano/update-pano.dto';
import { ApiBody, ApiOperation, ApiParam, ApiTags } from '@nestjs/swagger';

@ApiTags('环物全景')
@Controller('pano')
export class PanoController {
  constructor(private readonly panoService: PanoService) {}

  @ApiOperation({
    tags: ['创建 环物全景'],
    description: '创建 环物全景',
    deprecated: false,
  })
  @ApiBody({ type: CreatePanoDto })
  @Post()
  create(@Body() createPanoDto: CreatePanoDto) {
    return this.panoService.create(createPanoDto);
  }

  @ApiOperation({
    tags: ['查找全部 环物全景'],
    description: '查找全部 环物全景',
    deprecated: true,
  })
  @Get()
  findAll() {
    return this.panoService.findAll();
  }

  @ApiOperation({
    tags: ['通过 id 查找 环物全景'],
    description: '通过 id 查找 环物全景',
    deprecated: false,
  })
  @ApiParam({ type: String, name: 'id' })
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.panoService.findOne(id);
  }

  @ApiOperation({
    tags: ['通过 id 更新 环物全景'],
    description: '通过 id 更新 环物全景',
    deprecated: false,
  })
  @ApiParam({ type: String, name: 'id' })
  @ApiBody({ type: UpdatePanoDto })
  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePanoDto: UpdatePanoDto) {
    return this.panoService.update(id, updatePanoDto);
  }

  @ApiOperation({
    tags: ['通过 id 删除 环物全景'],
    description: '通过 id 删除 环物全景',
    deprecated: false,
  })
  @ApiParam({ type: String, name: 'id' })
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.panoService.remove(id);
  }
}
