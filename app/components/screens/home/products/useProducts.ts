import { useQuery } from '@tanstack/react-query'

import { ProductService } from '@/services/product.service'

export const useProducts = () => {
	const { data: products, isLoading } = useQuery({
		queryKey: ['get products'],
		queryFn: () => ProductService.getAll(),
		select: data => data.slice(0, 6)
	})

	return { products, isLoading }
}
