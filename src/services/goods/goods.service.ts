import { Injectable } from '@nestjs/common';
import { CreateGoodDto } from '../../models/goods/create-good.dto';
import { UpdateGoodDto } from '../../models/goods/update-good.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { GoodsDocument } from 'src/schemas/goods.schema';

@Injectable()
export class GoodsService {
  constructor(@InjectModel('goods') private goodsModel: Model<GoodsDocument>) {}
  async create(createGoodDto: CreateGoodDto) {
    return await this.goodsModel.create(createGoodDto);
  }

  async findAll() {
    return await this.goodsModel.find().exec();
  }

  async findOne(id: string) {
    return await this.goodsModel.find({ _id: { id } });
  }

  async update(id: string, updateGoodDto: UpdateGoodDto): Promise<any> {
    return await this.goodsModel.updateOne({ _id: { id } }, updateGoodDto);
  }

  async remove(id: string): Promise<any> {
    return await this.goodsModel.deleteOne({ _id: { id } });
  }
}
