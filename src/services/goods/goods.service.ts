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

  async findAll(pageNumber: number, pageSize: number) {
    const count = await this.goodsModel.count();
    if ((pageNumber - 1) * pageSize >= count) {
      return {
        status: 'extend',
      };
    } else {
      const items = await this.goodsModel
        .find()
        .skip((pageNumber - 1) * pageSize)
        .limit(pageSize)
        .sort({ _id: -1 })
        .exec();
      return {
        total: count,
        items: items,
      };
    }
  }

  async findOne(id: string) {
    return await this.goodsModel.findById(id);
  }

  async update(id: string, updateGoodDto: UpdateGoodDto): Promise<any> {
    return await this.goodsModel.findByIdAndUpdate(id, updateGoodDto);
  }

  async remove(id: string): Promise<any> {
    return await this.goodsModel.findByIdAndDelete(id);
  }
}
