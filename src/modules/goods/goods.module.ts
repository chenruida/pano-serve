import { Module } from '@nestjs/common';
import { GoodsService } from '../../services/goods/goods.service';
import { GoodsController } from '../../controllers/goods/goods.controller';

@Module({
  controllers: [GoodsController],
  providers: [GoodsService],
})
export class GoodsModule {}
