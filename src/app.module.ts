import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RoomsModule } from './rooms/rooms.module';
import { BookingScheduleModule } from './booking-schedule/booking-schedule.module';

@Module({
  imports: [RoomsModule, BookingScheduleModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
