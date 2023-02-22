import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { FieldService } from '../../services/field/field.service';
import { ApiBody, ApiQuery, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Field } from 'src/schemas/field.schema';
import { FieldUpdate } from 'src/models/field/field-update.model';

@ApiTags('字段')
@Controller('field')
export class FieldController {
  constructor(private readonly fieldService: FieldService) {}

  @ApiResponse({ description: '获取全部字段', type: [Field] })
  @Get('findAll')
  async findAll(): Promise<Field[]> {
    return this.fieldService.findAll();
  }

  @ApiBody({ type: Field || [Field] })
  @ApiResponse({ description: '添加字段', type: Field || [Field] })
  @Post('updateAll')
  async createAll(@Body() fileds: [Field]): Promise<Field[]> {
    return this.fieldService.createAll(fileds);
  }

  @ApiQuery({ name: 'ids', type: [String] })
  @ApiResponse({ description: '查找字段列表', type: [Field] })
  @Get('find')
  async find(@Query() query): Promise<Field[]> {
    return this.fieldService.findByIds(query.ids);
  }

  @ApiQuery({ name: 'ids', type: [String] })
  @ApiResponse({
    description: '删除字段列表',
  })
  @Get('delete')
  async delete(@Query() query): Promise<any> {
    return this.fieldService.delete(query.ids);
  }

  @ApiBody({ type: FieldUpdate })
  @ApiResponse({
    description: '更新字段',
    type: [Field],
  })
  @Post('update')
  async update(@Body() fieldUpdate: FieldUpdate): Promise<Field> {
    return this.fieldService.update(fieldUpdate);
  }
}
