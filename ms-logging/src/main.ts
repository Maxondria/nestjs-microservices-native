import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Transport } from '@nestjs/microservices';

async function bootstrap() {
  const app = await NestFactory.createMicroservice(AppModule, {
    transport: Transport.RMQ,
    options: {
      urls: [`amqp://guest:guest@localhost:5672`],
      queue: 'logging-service',
      queueOptions: { durable: false },
    },
  });
  await app.listen(() => console.log('Logging Microservice Listening...'));
}
bootstrap();
