import { Module } from '@nestjs/common';
import { PanoService } from '../services/pano/pano.service';
import { PanoController } from 'src/controllers/pano/pano.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { PanoSchema } from 'src/schemas/pano.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'pano', schema: PanoSchema }])],
  controllers: [PanoController],
  providers: [PanoService],
})
export class PanoModule {}
