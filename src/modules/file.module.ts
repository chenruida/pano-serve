import { Module } from '@nestjs/common';
import { MulterModule } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { FileController } from 'src/controllers/file/file.controller';
import { FileService } from 'src/services/file/file.service';
import { v4 as uuidv4 } from 'uuid';

@Module({
  imports: [
    MulterModule.register({
      storage: diskStorage({
        // 配置文件上传后的文件夹路径
        destination: `./public/uploads/`,
        filename: (req, file, cb) => {
          // 在此处自定义保存后的文件名称
          const filename = `${uuidv4()}.${file.originalname.split('.').pop()}`;
          return cb(null, filename);
        },
      }),
    }),
  ],
  controllers: [FileController],
  providers: [FileService],
})
export class FileModule {}
