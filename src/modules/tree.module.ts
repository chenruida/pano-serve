import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { TreeController } from 'src/controllers/tree/tree.controller';
import { TreeSchema } from 'src/schemas/tree.schema';
import { TreeService } from 'src/services/tree/tree.service';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'tree', schema: TreeSchema }])],
  controllers: [TreeController],
  providers: [TreeService],
})
export class TreeModule {}
