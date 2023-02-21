import { Controller } from '@nestjs/common';
import { FieldService } from '../../services/field/field.service';

@Controller('field')
export class FieldController {
  constructor(private readonly fieldService: FieldService) {}
}
