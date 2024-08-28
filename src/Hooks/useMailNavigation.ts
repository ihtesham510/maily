import { useParams, useNavigate, useLocation } from 'react-router-dom'
export type TypeRoutes =
	| 'inbox'
	| 'drafts'
	| 'sent'
	| 'junk'
	| 'archive'
	| 'trash'
	| 'new'
export const useMailNavigation = () => {
	const { id, route } = useParams<{ id?: string; route: TypeRoutes }>()
	const location = useLocation()
	const segments = location.pathname.split('/')
	const navigate = useNavigate()
	return (r: TypeRoutes) =>
		r === 'new'
			? navigate(`/mails/${segments[2]}/new`)
			: id
				? navigate(`/mails/${route}/${id}`)
				: navigate(`/mails/${r}`)
}
