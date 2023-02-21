import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TreeModule } from './modules/tree/tree.module';
import { setupConfig } from './config/config.setup';
import { setupMongodb } from './db/mongoose.setup';
import { FieldModule } from './modules/field/field.module';

@Module({
  imports: [setupConfig(), setupMongodb(), TreeModule, FieldModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
