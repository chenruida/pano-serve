import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Field, FieldDocument } from 'src/schemas/field.schema';

@Injectable()
export class FieldService {
  constructor(@InjectModel('field') private fieldModel: Model<FieldDocument>) {}

  async create(createTreeDto: Field): Promise<Field> {
    const createdTree = new this.fieldModel(createTreeDto);
    return createdTree.save();
  }

  async findAll(): Promise<Field[]> {
    return this.fieldModel.find().exec();
  }

  async findByIds(ids: [string]): Promise<Field[]> {
    return this.fieldModel.find(ids);
  }

  async update(treeUpdate: FieldUpdate): Promise<any> {
    // 这里是异步的  remove 方法删除成功并返回相应的个数
    const temp = await this.fieldModel.findByIdAndUpdate(
      treeUpdate.sid,
      treeUpdate.tree,
    );
    return temp;
  }

  async delete(sid: string): Promise<Field> {
    // 这里是异步的  remove 方法删除成功并返回相应的个数
    const temp = await this.fieldModel.findByIdAndDelete(sid);
    return temp;
  }
}
