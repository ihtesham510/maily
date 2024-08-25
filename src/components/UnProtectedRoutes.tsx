import useAuth from '@/Hooks/useAuth'
import { PropsWithChildren } from 'react'
import { Navigate } from 'react-router'

const UnProtectedRoute: React.FC<PropsWithChildren> = ({ children }) => {
	const auth = useAuth()
	const isAuthenticated = auth.isAuthenticated && !auth.isLoading
	if (auth.isLoading) {
		return <p>....loading</p>
	}
	return isAuthenticated ? <Navigate to='/mails/inbox' /> : children
}

export default UnProtectedRoute
