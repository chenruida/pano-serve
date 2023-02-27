import { Module } from '@nestjs/common';
import { HotspotService } from '../services/hotspot/hotspot.service';
import { HotspotController } from '../controllers/hotspot/hotspot.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { HotspotSchema } from 'src/schemas/hotspot.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'hotspot', schema: HotspotSchema }]),
  ],
  controllers: [HotspotController],
  providers: [HotspotService],
})
export class HotspotModule {}
