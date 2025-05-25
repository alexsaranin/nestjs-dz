import { Module } from '@nestjs/common';
import { BookingScheduleController } from './booking-schedule.controller';

@Module({
  controllers: [BookingScheduleController]
})
export class BookingScheduleModule {}
