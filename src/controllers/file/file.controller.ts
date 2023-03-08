import {
  Controller,
  Post,
  UploadedFile,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { FileInterceptor } from '@nestjs/platform-express';
import { ApiTags, ApiBody, ApiConsumes, ApiResponse } from '@nestjs/swagger';
import { FileUploadDto } from 'src/models/file/file-upload.model';
import { FileService } from 'src/services/file/file.service';

@ApiTags('文件上传')
@Controller('file')
@UseGuards(AuthGuard('jwt'))
export class FileController {
  constructor(private readonly fileService: FileService) {}

  @Post('pano')
  @UseInterceptors(FileInterceptor('file'))
  @ApiConsumes('multipart/form-data')
  @ApiBody({
    description: '上传全景压缩包',
    type: FileUploadDto,
  })
  @ApiResponse({ description: '全景地址' })
  async uploadPano(@UploadedFile() file: Express.Multer.File) {
    return await this.fileService.uploadPano(file);
  }

  @Post('upload')
  @UseInterceptors(FileInterceptor('file'))
  @ApiConsumes('multipart/form-data')
  @ApiBody({
    description: '文件',
    type: FileUploadDto,
  })
  @ApiResponse({ description: '文件地址' })
  @UseGuards(AuthGuard('jwt'))
  upload(@UploadedFile() file: Express.Multer.File) {
    return file;
  }
}
