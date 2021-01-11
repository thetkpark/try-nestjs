import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { ProductModule } from './product/product.module'

// Module bundle the controllers, providers, ...
@Module({
	imports: [ProductModule],
	controllers: [AppController], // Controller
	providers: [AppService], // Provide service to controller (Ex: DB query, ...)
})
export class AppModule {}
