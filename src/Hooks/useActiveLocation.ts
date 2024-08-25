import { useLocation } from 'react-router-dom'

export const useActiveLocation = () => {
	const location = useLocation()

	return (route: string) => location.pathname.split('/').includes(route)
}
