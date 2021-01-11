import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common'
import { ProductService } from './product.service'

@Controller('product')
export class ProductController {
	// Get service from product.service.ts
	constructor(private readonly productsService: ProductService) {}

	@Post()
	addProduct(@Body() prodBody: { title: string; description: string; price: number }) {
		const prodId = this.productsService.insertProduct(prodBody.title, prodBody.description, prodBody.price)
		return { id: prodId }
	}

	@Get()
	getAllProducts() {
		return this.productsService.getProducts()
	}

	@Get(':id')
	getProduct(@Param('id') prodId: string) {
		return this.productsService.getProduct(prodId)
	}

	@Patch(':id')
	updateProduct(
		@Param('id') prodId: string,
		@Body() prodUpdate: { title: string; description: string; price: number }
	) {
		const updatedProduct = this.productsService.updateProduct(
			prodId,
			prodUpdate.title,
			prodUpdate.description,
			prodUpdate.price
		)
		return updatedProduct
	}

	@Delete(':id')
	removeProduct(@Param('id') prodId: string) {
		const deletedProduct = this.productsService.deleteProduct(prodId)
		return deletedProduct
	}
}
