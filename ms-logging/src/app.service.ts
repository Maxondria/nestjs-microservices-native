import { Injectable, Logger } from '@nestjs/common';

@Injectable()
export class AppService {
  private log: Logger = new Logger('LoggingService', true);
  logger(data) {
    this.log.log(data);
  }
}
