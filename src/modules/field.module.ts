import { Module } from '@nestjs/common';
import { FieldService } from '../services/field/field.service';
import { FieldController } from '../controllers/field/field.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { FieldSchema } from 'src/schemas/field.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'field', schema: FieldSchema }]),
  ],
  controllers: [FieldController],
  providers: [FieldService],
})
export class FieldModule {}
