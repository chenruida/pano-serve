import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateHotspotDto } from 'src/models/hotspot/create-hotspot.dto';
import { UpdateHotspotDto } from 'src/models/hotspot/update-hotspot.dto';
import { Hotspot, HotspotDocument } from 'src/schemas/hotspot.schema';

@Injectable()
export class HotspotService {
  constructor(
    @InjectModel('hotspot')
    private hotspotModel: Model<HotspotDocument>,
  ) {}
  async create(createHotspotDto: CreateHotspotDto) {
    return await this.hotspotModel.create(createHotspotDto);
  }

  async findAll() {
    return await this.hotspotModel.find().exec();
  }

  async findOne(id: string) {
    return await this.hotspotModel.findById(id);
  }

  async update(
    id: string,
    updateHotspotDto: UpdateHotspotDto,
  ): Promise<Hotspot> {
    return await this.hotspotModel.findByIdAndUpdate(
      { _id: { id } },
      updateHotspotDto,
    );
  }
  async remove(id: string): Promise<Hotspot> {
    return await this.hotspotModel.findByIdAndDelete({ _id: { id } });
  }
}
