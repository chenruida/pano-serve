import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TreeModule } from './modules/tree/tree.module';
import { setupConfig } from './config/config.setup';
import { setupMongodb } from './db/mongoose.setup';

@Module({
  imports: [setupConfig(), setupMongodb(), TreeModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
