import { Test, TestingModule } from '@nestjs/testing';
import { PanoService } from './pano.service';

describe('PanoService', () => {
  let service: PanoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PanoService],
    }).compile();

    service = module.get<PanoService>(PanoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
