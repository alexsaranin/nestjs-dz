import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common';
import { BookingScheduleModel } from './booking-schedule.model/booking-schedule.model';
import { FindBookingScheduleDto } from './dto/find-booking-schedule.dto';

@Controller('booking-schedule')
export class BookingScheduleController {
  @Post('create')
  async create(@Body() dto: Omit<BookingScheduleModel, '_id'>) {
  }

  @Get(':id')
  async get(@Param() id: string) {
  }

  @Patch(':id/cancel')
  async cancel(@Param() id: string) {
  }

  @Post('find')
  async find(@Body() dto: FindBookingScheduleDto) {
  }
}
