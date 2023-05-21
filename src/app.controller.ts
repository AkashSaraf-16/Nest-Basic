import { Controller, Get } from '@nestjs/common';

// @Controller()
@Controller('/app')
export class AppController {
  @Get()
  getRootRoute() {
    return 'Hello World!!';
  }
  @Get('/bye')
  getByeThere() {
    return 'Bye there!!';
  }
}
