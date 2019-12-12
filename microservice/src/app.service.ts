import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  async getHello(data: { name: string }): Promise<{ greeting: string }> {
    return { greeting: 'Hello, ' + data.name };
  }
}
