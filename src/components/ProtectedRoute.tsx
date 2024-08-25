import useAuth from '@/Hooks/useAuth'
import { PropsWithChildren } from 'react'
import { Navigate } from 'react-router'

const ProtectedRoute: React.FC<PropsWithChildren> = ({ children }) => {
	const auth = useAuth()
	const isAuthenticated = auth.isAuthenticated && !auth.isLoading
	return isAuthenticated ? children : <Navigate to='/' />
}

export default ProtectedRoute
