import { Test, TestingModule } from '@nestjs/testing';
import { PanoController } from '../../pano./controllers/pano/pano.controller';
import { PanoService } from './pano.service';

describe('PanoController', () => {
  let controller: PanoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PanoController],
      providers: [PanoService],
    }).compile();

    controller = module.get<PanoController>(PanoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
