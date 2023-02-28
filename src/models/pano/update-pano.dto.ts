import { PartialType } from '@nestjs/swagger';
import { CreatePanoDto } from './create-pano.dto';

export class UpdatePanoDto extends PartialType(CreatePanoDto) {}
