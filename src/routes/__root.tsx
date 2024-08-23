import { createRootRouteWithContext, Outlet } from '@tanstack/react-router'

import { type Auth } from '@/Hooks/useAuth'
type RouterContext = {
	auth: Auth
}
export const Route = createRootRouteWithContext<RouterContext>()({
	component: () => <Outlet />,
})
