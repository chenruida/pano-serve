import { Module } from '@nestjs/common';
import { GoodsService } from '../services/goods/goods.service';
import { GoodsController } from '../controllers/goods/goods.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { GoodsSchema } from 'src/schemas/goods.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'goods', schema: GoodsSchema }]),
  ],
  controllers: [GoodsController],
  providers: [GoodsService],
})
export class GoodsModule {}
