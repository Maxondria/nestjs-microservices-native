import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Transport, ClientsModule } from '@nestjs/microservices';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'HELLO_SERVICE',
        transport: Transport.TCP,
        options: {
          host: 'localhost',
          port: 8877,
        },
      },
      {
        name: 'LOGGING_SERVICE',
        transport: Transport.RMQ,
        options: {
          urls: [`amqp://guest:guest@localhost:5672`],
          queue: 'logging-service',
          queueOptions: { durable: false },
        },
      },
    ]),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
