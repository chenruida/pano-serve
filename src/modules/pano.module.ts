import { Module } from '@nestjs/common';
import { PanoService } from '../services/pano/pano.service';
import { PanoController } from 'src/controllers/pano/pano.controller';

@Module({
  controllers: [PanoController],
  providers: [PanoService],
})
export class PanoModule {}
