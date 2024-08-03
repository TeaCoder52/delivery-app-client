import { useQuery } from '@tanstack/react-query'

import { UserService } from '@/services/user.service'

export const useProfile = () => {
	const { data: profile } = useQuery({
		queryKey: ['profile'],
		queryFn: () => UserService.getProfile()
	})

	return { profile }
}
