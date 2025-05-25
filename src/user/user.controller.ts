import { Body, Controller, Delete, Get, Patch, Post, Param } from '@nestjs/common';
import { UserModel } from './user.model/user.model';
import { FindUserDto } from './dto/find-user.dto';

@Controller('user')
export class UserController {
  @Post('create')
  async create(@Body() dto: Omit<UserModel, '_id'>) {
  }

  @Get(':id')
  async get(@Param() id: string) {
  }

  @Patch(':id')
  async update(@Param() id: string, @Body() dto: Partial<Omit<UserModel, '_id'>>) {
  }

  @Delete(':id')
  async delete(@Param() id: string) {
  }

  @Post('find')
  async find(@Body() dto: FindUserDto) {
  }
}
