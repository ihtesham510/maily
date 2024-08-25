import { useQuery } from 'convex/react'
import { api } from '@convex/_generated/api'
export const useUser = () => {
	const user = useQuery(api.user.getUserIdentity)
	return user
}
export type User = ReturnType<typeof useUser>
