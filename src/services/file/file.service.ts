import { Injectable } from '@nestjs/common';
import { zip } from 'compressing';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class FileService {
  async uploadPano(file: Express.Multer.File) {
    const uuid = uuidv4();
    zip.uncompress(file.path, `./public/panos/${uuid}/`);
    return process.env.RESOURCE_PATH + uuid + '/';
  }
}
