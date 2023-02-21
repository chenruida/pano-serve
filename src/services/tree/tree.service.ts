import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { TreeUpdate } from 'src/models/tree-update.model';
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

  async update(treeUpdate: TreeUpdate): Promise<any> {
    // 这里是异步的  remove 方法删除成功并返回相应的个数
    const temp = await this.treeModel.findByIdAndUpdate(
      treeUpdate.sid,
      treeUpdate.tree,
    );
    return temp;
  }

  async delete(sid: string): Promise<Tree> {
    // 这里是异步的  remove 方法删除成功并返回相应的个数
    const temp = await this.treeModel.findByIdAndDelete(sid);
    return temp;
  }
}
