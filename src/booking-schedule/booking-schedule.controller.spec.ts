import { Test, TestingModule } from '@nestjs/testing';
import { BookingScheduleController } from './booking-schedule.controller';

describe('BookingScheduleController', () => {
  let controller: BookingScheduleController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BookingScheduleController],
    }).compile();

    controller = module.get<BookingScheduleController>(BookingScheduleController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
