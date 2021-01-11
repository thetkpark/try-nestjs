import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

// Module bundle the controllers, providers, ...
@Module({
  imports: [],
  controllers: [AppController], // Controller
  providers: [AppService], // Provide service to controller (Ex: DB query, ...)
})
export class AppModule {}
