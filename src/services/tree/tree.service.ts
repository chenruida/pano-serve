import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Tree, TreeDocument } from 'src/schemas/tree.schema';

@Injectable()
export class TreeService {
  constructor(@InjectModel('tree') private treeModel: Model<TreeDocument>) {}

  async create(createTreeDto: Tree): Promise<Tree> {
    const createdTree = new this.treeModel(createTreeDto);
    return createdTree.save();
  }

  async findAll(): Promise<Tree[]> {
    return this.treeModel.find().exec();
  }

  async update(sid: string, data: any): Promise<any> {
    // 这里是异步的  remove 方法删除成功并返回相应的个数
    const temp = await this.treeModel.updateOne({ _id: sid }, { $set: data });
    return temp;
  }

  async delete(sid: string) {
    // 这里是异步的  remove 方法删除成功并返回相应的个数
    const temp = await this.treeModel.remove({ _id: sid });
    return temp;
  }
}
