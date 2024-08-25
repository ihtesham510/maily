import AccountDisplay from '@/components/Mail/AccountDisplay'
import MailNav from '@/components/Mail/MailNav'
import {
	ResizableHandle,
	ResizablePanel,
	ResizablePanelGroup,
} from '@/components/ui/resizable'
import { Separator } from '@/components/ui/separator'
import { Inbox, Send, ArchiveX, Trash2, Archive, FileIcon } from 'lucide-react'
import { useEffect, useState } from 'react'

import { Outlet, useLocation } from 'react-router'

export default function Mails() {
	const getDefaultValue = () => {
		const localValue = localStorage.getItem('NavBarCollapsed')
		if (localValue) {
			return localValue === 'true'
		}
		return false
	}
	const [isCollapsed, setIsCollapsed] = useState(getDefaultValue)
	useEffect(
		() => localStorage.setItem('NavBarCollapsed', `${isCollapsed}`),
		[isCollapsed],
	)
	const location = useLocation()
	const isActive = (route: string) => {
		return location.pathname.split('/').includes(route)
	}
	return (
		<div className='w-full h-screen'>
			<ResizablePanelGroup direction='horizontal' className=''>
				<ResizablePanel
					defaultSize={isCollapsed ? 3 : 18}
					maxSize={18}
					onResize={e => setIsCollapsed(e <= 7)}
					collapsible={true}
					minSize={3}
				>
					<AccountDisplay collapsed={isCollapsed} />
					<Separator className='my-2' />
					<MailNav
						isCollapsed={isCollapsed}
						links={[
							{
								title: 'Inbox',
								icon: Inbox,
								variant: isActive('inbox') ? 'default' : 'ghost',
								to: 'inbox',
							},
							{
								title: 'Drafts',
								icon: FileIcon,
								variant: isActive('drafts') ? 'default' : 'ghost',
								to: 'drafts',
							},
							{
								title: 'Sent',
								icon: Send,
								variant: isActive('sent') ? 'default' : 'ghost',
								to: 'sent',
							},
							{
								title: 'Junk',
								icon: ArchiveX,
								variant: isActive('junk') ? 'default' : 'ghost',
								to: 'junk',
							},
							{
								title: 'Trash',
								icon: Trash2,
								variant: isActive('trash') ? 'default' : 'ghost',
								to: 'trash',
							},
							{
								title: 'Archive',
								icon: Archive,
								variant: isActive('archive') ? 'default' : 'ghost',
								to: 'archive',
							},
						]}
					/>
				</ResizablePanel>
				<ResizableHandle withHandle />
				<ResizablePanel defaultSize={82} maxSize={96}>
					<Outlet />
				</ResizablePanel>
			</ResizablePanelGroup>
		</div>
	)
}
