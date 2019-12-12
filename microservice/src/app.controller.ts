import { Controller } from '@nestjs/common';
import { AppService } from './app.service';
import { MessagePattern } from '@nestjs/microservices';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @MessagePattern({ cmd: 'greeting' })
  async getHello(data: { name: string }): Promise<{ greeting: string }> {
    return this.appService.getHello(data);
  }
}
