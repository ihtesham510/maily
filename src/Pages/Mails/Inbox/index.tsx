import {
	ResizableHandle,
	ResizablePanel,
	ResizablePanelGroup,
} from '@/components/ui/resizable'
import { Outlet } from 'react-router'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { ScrollArea } from '@/components/ui/scroll-area'
import { Separator } from '@/components/ui/separator'
import { Input } from '@/components/ui/input'
import { Search } from 'lucide-react'
import { useMailStore } from '@/store'
import MailList from './MailList'

const Inbox = () => {
	const { mails } = useMailStore()
	return (
		<>
			<ResizablePanelGroup direction='horizontal'>
				<ResizablePanel defaultSize={50} minSize={30} maxSize={70}>
					<Tabs defaultValue='all'>
						<div className='h-[7vh] flex justify-between items-center'>
							<h1 className='text-3xl font-bold ml-4'>Inbox</h1>
							<TabsList className='mr-4'>
								<TabsTrigger value='all'>All</TabsTrigger>
								<TabsTrigger value='unread'>Unread</TabsTrigger>
							</TabsList>
						</div>
						<Separator />
						<div className='relative hidden sm:block mx-4 mb-2 mt-4'>
							<Search className='absolute left-2 top-3 h-4 w-4 text-muted-foreground' />
							<Input placeholder='Search' className='pl-8 w-full' />
						</div>
						<TabsContent value='all'>
							<ScrollArea className='w-auto h-[93vh]'>
								<MailList mails={mails} />
							</ScrollArea>
						</TabsContent>
						<TabsContent value='unread'>
							<ScrollArea className='w-auto h-[92vh]'>
								<MailList mails={mails.filter(m => !m.read)} />
							</ScrollArea>
						</TabsContent>
					</Tabs>
				</ResizablePanel>
				<ResizableHandle withHandle />
				<ResizablePanel defaultSize={50} minSize={40} maxSize={70}>
					<Outlet />
				</ResizablePanel>
			</ResizablePanelGroup>
		</>
	)
}

export default Inbox
