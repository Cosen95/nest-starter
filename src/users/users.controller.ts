import { Body, Controller, Get, Post, Query } from '@nestjs/common';

@Controller('users')
export class UsersController {
  @Get('getUser')
  getUser(@Query() query) {
    console.log('获取用户数据 query', query);
    return '获取用户数据';
  }

  @Post('createUser')
  createUser(@Body() body) {
    console.log('创建用户 body', body);
  }
}
