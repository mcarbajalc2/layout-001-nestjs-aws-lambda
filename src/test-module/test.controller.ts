import { Controller, Get, Post, Body } from '@nestjs/common';
import { TestDto } from './dto/test.dto';

@Controller('test')
export class TestController {
  @Get('/')
  testGetMethod() {
    return 'Hola todes';
  }

  @Post('/')
  testPostMethod(@Body() payload: TestDto) {
    return payload;
  }
}
