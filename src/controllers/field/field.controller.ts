import { Body, Controller, Get, Post, Query, UseGuards } from '@nestjs/common';
import { FieldService } from '../../services/field/field.service';
import {
  ApiBody,
  ApiOperation,
  ApiQuery,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { Field } from 'src/schemas/field.schema';
import { FieldUpdate } from 'src/models/field/field-update.model';
import { CreateFieldDto } from 'src/models/field/create-field.model';
import { AuthGuard } from '@nestjs/passport';

@ApiTags('字段')
@Controller('field')
export class FieldController {
  constructor(private readonly fieldService: FieldService) {}

  @ApiOperation({
    tags: ['获取全部字段信息'],
    description: '获取全部字段信息',
    deprecated: false,
  })
  @ApiResponse({ description: '获取全部字段', type: [Field] })
  @Get()
  @UseGuards(AuthGuard('jwt'))
  async findAll(): Promise<Field[]> {
    return this.fieldService.findAll();
  }

  @ApiOperation({
    tags: ['添加字段'],
    description: '添加字段',
    deprecated: false,
  })
  @ApiBody({ type: CreateFieldDto || [CreateFieldDto] })
  @ApiResponse({
    description: '添加字段',
    type: CreateFieldDto || [CreateFieldDto],
  })
  @Post()
  @UseGuards(AuthGuard('jwt'))
  async createAll(@Body() fileds: [Field]): Promise<Field[]> {
    return this.fieldService.createAll(fileds);
  }

  @ApiOperation({
    tags: ['查找字段列表'],
    description: '查找字段列表',
    deprecated: false,
  })
  @ApiQuery({ name: 'ids', type: [String] })
  @ApiResponse({ description: '查找字段列表', type: [Field] })
  @Get('find')
  @UseGuards(AuthGuard('jwt'))
  async find(@Query() query): Promise<Field[]> {
    return this.fieldService.findByIds(query.ids);
  }

  @ApiOperation({
    tags: ['删除字段列表'],
    description: '删除字段列表',
    deprecated: false,
  })
  @ApiQuery({ name: 'ids', type: [String] })
  @ApiResponse({
    description: '删除字段列表',
  })
  @Get('delete')
  @UseGuards(AuthGuard('jwt'))
  async delete(@Query() query): Promise<any> {
    return this.fieldService.delete(query.ids);
  }

  @ApiOperation({
    tags: ['删除字段列表'],
    description: '删除字段列表',
    deprecated: false,
  })
  @ApiBody({ type: FieldUpdate })
  @ApiResponse({
    description: '更新字段',
    type: [Field],
  })
  @Post('update')
  @UseGuards(AuthGuard('jwt'))
  async update(@Body() fieldUpdate: FieldUpdate): Promise<Field> {
    return this.fieldService.update(fieldUpdate);
  }
}
