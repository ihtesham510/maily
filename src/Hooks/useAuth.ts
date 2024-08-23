import { useConvexAuth } from 'convex/react'

export default function useAuth() {
	return useConvexAuth()
}
export type Auth = ReturnType<typeof useAuth>
