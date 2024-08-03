import { FC } from 'react'

import Layout from '@/components/layout/Layout'

import Banner from './banner/Banner'
import Categories from './categories/Categories'
import Products from './products/Products'

const Home: FC = () => {
	return (
		<Layout showHeader>
			<Banner />
			<Categories />
			<Products />
		</Layout>
	)
}

export default Home
