import { Controller, Get, HttpCode, HttpStatus } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('healthcheck')
  @HttpCode(HttpStatus.OK)
  execute(): { status: string, test_message: string } {
    return {
      status: 'OK',
      test_message: "Testing, testing, 123"
    };
  }
}
