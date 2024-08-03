import { FC } from 'react'
import { View } from 'react-native'

import Loader from '@/components/ui/Loader'
import Catalog from '@/components/ui/catalog/Catalog'

import { useProducts } from './useProducts'

const Products: FC = () => {
	const { products, isLoading } = useProducts()

	return (
		<View>
			{isLoading ? (
				<Loader />
			) : (
				products?.length && (
					<Catalog title='Products' products={products} />
				)
			)}
		</View>
	)
}

export default Products
