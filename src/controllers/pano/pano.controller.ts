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

@Controller('pano')
export class PanoController {
  constructor(private readonly panoService: PanoService) {}

  @Post()
  create(@Body() createPanoDto: CreatePanoDto) {
    return this.panoService.create(createPanoDto);
  }

  @Get()
  findAll() {
    return this.panoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.panoService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePanoDto: UpdatePanoDto) {
    return this.panoService.update(id, updatePanoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.panoService.remove(id);
  }
}
