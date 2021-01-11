import { Injectable, NotFoundException } from '@nestjs/common'
import { Product } from './product.model'

@Injectable()
export class ProductService {
	private products: Product[] = []

	insertProduct(title: string, desc: string, price: number) {
		const prodId = Math.round(Math.random() * 100 + 1).toString()
		const newProduct = new Product(prodId, title, desc, price)
		this.products.push(newProduct)
		return prodId
	}

	getProducts() {
		return [...this.products]
	}

	getProduct(productId: string) {
		const { product } = this.findProduct(productId)
		return { ...product }
	}

	updateProduct(productId: string, title: string, desc: string, price: number) {
		const { productIndex, product } = this.findProduct(productId)
		const updatedProduct = { ...product }
		updatedProduct.title = title ? title : updatedProduct.title
		updatedProduct.description = desc ? desc : updatedProduct.description
		updatedProduct.price = price ? price : updatedProduct.price
		this.products[productIndex] = updatedProduct
		return updatedProduct
	}

	deleteProduct(prodId: string) {
		const { productIndex, product } = this.findProduct(prodId)
		this.products.splice(productIndex, 1)
		return product
	}

	private findProduct(id: string) {
		const productIndex = this.products.findIndex(prod => prod.id === id)
		const product = this.products[productIndex]
		if (!product) throw new NotFoundException('Could not find product')
		return {
			product,
			productIndex,
		}
	}
}
