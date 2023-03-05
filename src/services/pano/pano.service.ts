import { Injectable } from '@nestjs/common';
import { CreatePanoDto } from '../../models/pano/create-pano.dto';
import { UpdatePanoDto } from '../../models/pano/update-pano.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { PanoDocument } from 'src/schemas/pano.schema';

@Injectable()
export class PanoService {
  constructor(
    @InjectModel('pano')
    private panoModel: Model<PanoDocument>,
  ) {}
  async create(createPanoDto: CreatePanoDto) {
    return await this.panoModel.create(createPanoDto);
  }

  async findAll() {
    return await this.panoModel.find().exec();
  }

  async findOne(id: string) {
    return await this.panoModel.findById(id);
  }

  update(id: string, updatePanoDto: UpdatePanoDto) {
    return this.panoModel.findByIdAndUpdate(id, updatePanoDto);
  }

  remove(id: string) {
    return this.panoModel.findByIdAndDelete(id);
  }
}
