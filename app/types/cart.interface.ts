import { IProduct } from './product.inteface'

export interface ICartItem {
	id: number
	product: IProduct
	quantity: number
	price: number
}
