import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RoomModule } from './room/room.module';
import { BookingScheduleModule } from './booking-schedule/booking-schedule.module';
import { AuthController } from './auth/auth.controller';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [RoomModule, BookingScheduleModule, AuthModule, UserModule],
  controllers: [AppController, AuthController],
  providers: [AppService],
})
export class AppModule {}
