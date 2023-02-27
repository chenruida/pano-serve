import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TreeModule } from './modules/tree.module';
import { setupConfig } from './config/config.setup';
import { setupMongodb } from './db/mongoose.setup';
import { FieldModule } from './modules/field.module';
import { GoodsModule } from './modules/goods.module';
import { HotspotModule } from './modules/hotspot.module';

@Module({
  imports: [
    setupConfig(),
    setupMongodb(),
    TreeModule,
    FieldModule,
    GoodsModule,
    HotspotModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
