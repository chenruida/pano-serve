import { Test, TestingModule } from '@nestjs/testing';
import { HotspotController } from '../../hotspot./controllers/hotspot/hotspot.controller';
import { HotspotService } from '../../hotspot/hotspot.service';

describe('HotspotController', () => {
  let controller: HotspotController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [HotspotController],
      providers: [HotspotService],
    }).compile();

    controller = module.get<HotspotController>(HotspotController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
