import { getPaymentUrl } from '@/config/api.config'

import instance from '@/api/interceptors.api'

export interface IStripe {
	amount: number
	userId: string | undefined
}

export const StripeService = {
	async createPayment(data: IStripe) {
		return instance({
			url: getPaymentUrl('/create'),
			method: 'POST',
			data
		})
	}
}
