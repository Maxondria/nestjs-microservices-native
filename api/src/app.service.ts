import { Injectable, Inject } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';

@Injectable()
export class AppService {
  constructor(
    @Inject('HELLO_SERVICE') private readonly client: ClientProxy,
    @Inject('LOGGING_SERVICE') private readonly logger: ClientProxy,
  ) {}

  async getHello(name: string): Promise<{ greeting: string }> {
    const pattern = { cmd: 'greeting' };

    this.logger.emit(
      'log_data',
      'Queue ' + JSON.stringify(pattern) + ' for HELLO SERVICE',
    );

    return this.client
      .send<{ greeting: string }, string>(pattern, name)
      .toPromise();
  }
}
