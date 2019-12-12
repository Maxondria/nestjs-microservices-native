import { Controller, Post, Body } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post()
  async getHello(
    @Body() name: string,
  ): Promise<{ greeting: string; smile: string }> {
    const greet = await this.appService.getHello(name);
    return { ...greet, smile: 'Mumiliyoni...' };
  }
}
