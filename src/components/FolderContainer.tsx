import React from 'react'
import {
	ResizableHandle,
	ResizablePanel,
	ResizablePanelGroup,
} from '@/components/ui/resizable'
import { Outlet } from 'react-router'
import { ScrollArea } from '@/components/ui/scroll-area'
import { Separator } from '@/components/ui/separator'
import { Input } from '@/components/ui/input'
import { Search } from 'lucide-react'
import MailList from '@/components/MailList'
import { type Mail } from '@/Hooks/useMail'
import { usePanels } from '@/Hooks/usePanels'

interface Props {
	header: React.ReactNode
	mails: Mail[] | undefined
}

const FolderContainer: React.FC<Props> = ({ header, mails }) => {
	const { p1, p2, setPanel1, setPanel2 } = usePanels()
	return (
		<>
			<ResizablePanelGroup direction='horizontal'>
				<ResizablePanel
					defaultSize={p1}
					onResize={e => setPanel1(e)}
					minSize={30}
					maxSize={70}
				>
					<div className='h-[7vh] flex justify-between items-center'>
						{header}
					</div>
					<Separator />
					<div className='relative hidden sm:block mx-4 mb-2 mt-4'>
						<Search className='absolute left-2 top-3 h-4 w-4 text-muted-foreground' />
						<Input placeholder='Search' className='pl-8 w-full' />
					</div>
					<ScrollArea className='w-auto h-[92vh]'>
						<MailList mails={mails} />
					</ScrollArea>
				</ResizablePanel>
				<ResizableHandle withHandle />
				<ResizablePanel
					defaultSize={p2}
					onResize={e => setPanel2(e)}
					minSize={40}
					maxSize={70}
				>
					<Outlet />
				</ResizablePanel>
			</ResizablePanelGroup>
		</>
	)
}

export default FolderContainer
