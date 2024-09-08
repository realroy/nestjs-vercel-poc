import { Controller, Get, HttpCode, HttpStatus } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

import { AppService } from './app.service';

@ApiTags('app')
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @ApiOperation({ summary: 'Get hello message' })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Returns a hello message',
  })
  @HttpCode(HttpStatus.OK)
  getHello(): string {
    return this.appService.getHello();
  }
}
