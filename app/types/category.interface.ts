export interface ICategory {
	id: string
	name: string
	slug: string
	image: string
}

export interface ICategoryEditInput extends Omit<ICategory, 'id'> {}
