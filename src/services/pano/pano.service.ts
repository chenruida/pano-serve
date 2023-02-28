import { Injectable } from '@nestjs/common';
import { CreatePanoDto } from '../../models/pano/create-pano.dto';
import { UpdatePanoDto } from '../../models/pano/update-pano.dto';

@Injectable()
export class PanoService {
  create(createPanoDto: CreatePanoDto) {
    return 'This action adds a new pano';
  }

  findAll() {
    return `This action returns all pano`;
  }

  findOne(id: number) {
    return `This action returns a #${id} pano`;
  }

  update(id: number, updatePanoDto: UpdatePanoDto) {
    return `This action updates a #${id} pano`;
  }

  remove(id: number) {
    return `This action removes a #${id} pano`;
  }
}
