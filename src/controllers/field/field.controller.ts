import { Controller } from '@nestjs/common';
import { FieldService } from '../../services/field/field.service';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('字段')
@Controller('field')
export class FieldController {
  constructor(private readonly fieldService: FieldService) {}
}
