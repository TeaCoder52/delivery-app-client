import { IProduct } from './product.inteface'

export interface IUser {
	id: string
	email: string
	password: string
	name: string
	avatarPath: string
	favorites: IProduct[]
}

export interface IUserEditInput extends Omit<IUser, 'id' | 'createdAt'> {}
