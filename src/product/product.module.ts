import { Module } from '@nestjs/common'
import { ProductController } from './product.controller'
import { ProductService } from './product.service'
// A module for productr related controller and providers (services)
@Module({
	controllers: [ProductController],
	providers: [ProductService],
})
export class ProductModule {}
