import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { RoomModel } from './room.model/room.model';
import { FindRoomDto } from './dto/find-room.dto';

@Controller('room')
export class RoomController {
  @Post('create')
  async create(@Body() dto: Omit<RoomModel, '_id'>) {
  }

  @Get(':id')
  async get(@Param() id: string) {
  }

  @Patch(':id')
  async update(@Param() id: string, @Body() dto: Partial<Omit<RoomModel, '_id'>>) {
  }

  @Delete(':id')
  async delete(@Param() id: string) {
  }

  @Post('find')
  async find(@Body() dto: FindRoomDto) {
  }
}
