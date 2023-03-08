import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { PanoService } from '../../services/pano/pano.service';
import { CreatePanoDto } from '../../models/pano/create-pano.dto';
import { UpdatePanoDto } from '../../models/pano/update-pano.dto';
import { ApiBody, ApiOperation, ApiParam, ApiTags } from '@nestjs/swagger';
import { AuthGuard } from '@nestjs/passport';

@ApiTags('环物全景')
@Controller('pano')
@UseGuards(AuthGuard('jwt'))
export class PanoController {
  constructor(private readonly panoService: PanoService) {}

  @ApiOperation({
    tags: ['创建 环物全景'],
    description: '创建 环物全景',
    deprecated: false,
  })
  @ApiBody({ type: CreatePanoDto })
  @Post()
  @UseGuards(AuthGuard('jwt'))
  create(@Body() createPanoDto: CreatePanoDto) {
    return this.panoService.create(createPanoDto);
  }

  @ApiOperation({
    tags: ['查找全部 环物全景'],
    description: '查找全部 环物全景',
    deprecated: true,
  })
  @Get()
  @UseGuards(AuthGuard('jwt'))
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
  @UseGuards(AuthGuard('jwt'))
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
  @UseGuards(AuthGuard('jwt'))
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
  @UseGuards(AuthGuard('jwt'))
  remove(@Param('id') id: string) {
    return this.panoService.remove(id);
  }
}
