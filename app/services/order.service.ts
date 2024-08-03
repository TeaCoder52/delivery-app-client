import { IOrder } from '@/types/order.interface'

import { getOrdersUrl } from '@/config/api.config'

import { request } from '@/api/request.api'

enum EnumOrderStatus {
	PENDING = 'PENDING',
	PAYED = 'PAYED',
	SHIPPED = 'SHIPPED',
	DELIVERED = 'DELIVERED'
}

type TypeData = {
	status?: EnumOrderStatus
	items: {
		quantity: number
		price: number
		productId: string
	}[]
}

export const OrderService = {
	async getAll() {
		return request<IOrder[]>({
			url: getOrdersUrl(''),
			method: 'GET'
		})
	},

	async getByUserId() {
		return request<IOrder[]>({
			url: getOrdersUrl('/by-user'),
			method: 'GET'
		})
	},

	async place(data: TypeData) {
		return request<{ clientSecret: string }>({
			url: getOrdersUrl(''),
			method: 'POST',
			data
		})
	}
}
