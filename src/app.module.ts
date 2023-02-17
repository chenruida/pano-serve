import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { TreeModule } from './modules/tree/tree.module';

@Module({
  imports: [MongooseModule.forRoot('mongodb://localhost/gab'), TreeModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
