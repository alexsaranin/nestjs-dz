import { Body, Controller, Delete, Get, Patch, Post, Param } from '@nestjs/common';
import { UserModel } from './user.model/user.model';
import { GetAllUsersDto } from './dto/get-all-users.dto';

@Controller('user')
export class UserController {
  @Post('create')
  async create(@Body() dto: Omit<UserModel, '_id'>) {
  }

  @Patch(':id')
  async update(@Param() id: string, @Body() dto: Partial<Omit<UserModel, '_id'>>) {
  }

  @Delete(':id')
  async delete(@Param() id: string) {
  }

  @Get(':id')
  async get(@Param() id: string) {
  }

  @Post('users')
  async users(@Body() dto: GetAllUsersDto) {
  }
}
