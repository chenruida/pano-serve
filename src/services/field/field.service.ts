import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { FieldUpdate } from 'src/models/field/field-update.model';
import { Field, FieldDocument } from 'src/schemas/field.schema';

@Injectable()
export class FieldService {
  constructor(@InjectModel('field') private fieldModel: Model<FieldDocument>) {}

  async create(createTreeDto: Field): Promise<Field> {
    const createdTree = new this.fieldModel(createTreeDto);
    return createdTree.save();
  }

  async createAll(fileds: [Field]): Promise<Field[]> {
    return await this.fieldModel.create(fileds);
  }

  async findAll(): Promise<Field[]> {
    return this.fieldModel.find().exec();
  }

  async findByIds(ids: [string]): Promise<Field[]> {
    return this.fieldModel.find({ _id: { $in: ids } });
  }

  async update(treeUpdate: FieldUpdate): Promise<any> {
    const temp = await this.fieldModel.findByIdAndUpdate(
      treeUpdate.sid,
      treeUpdate.field,
    );
    return temp;
  }

  async delete(sid: [string]): Promise<any> {
    // 这里是异步的  remove 方法删除成功并返回相应的个数
    const temp = await this.fieldModel.deleteMany({ _id: { $in: sid } });
    return temp;
  }
}
