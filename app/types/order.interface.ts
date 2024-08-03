import { ICartItem } from './cart.interface'
import { IUser } from './user.interface'

export enum EnumOrderStatus {
	PENDING = 'PENDING',
	PAYED = 'PAYED',
	SHIPPED = 'SHIPPED',
	DELIVERED = 'DELIVERED'
}

export interface IOrder {
	id: string
	createdAt: string
	items: ICartItem[]
	status: EnumOrderStatus
	user: IUser
	total: number
}
