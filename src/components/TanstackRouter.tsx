import { RouterProvider, createRouter } from '@tanstack/react-router'
import useAuth from '@/Hooks/useAuth'
// Import the generated route tree
import { routeTree } from '@/routeTree.gen'

// Create a new router instance
const router = createRouter({
	routeTree,
	context: { auth: undefined! },
})

// Register the router instance for type safety
declare module '@tanstack/react-router' {
	interface Register {
		router: typeof router
	}
}
export default function TanstackRouter() {
	const auth = useAuth()
	return <RouterProvider router={router} context={{ auth }} />
}
