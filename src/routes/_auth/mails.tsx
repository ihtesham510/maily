import { Button } from '@/components/ui/button'
import {
	ResizablePanelGroup,
	ResizablePanel,
	ResizableHandle,
} from '@/components/ui/resizable'
import { Tooltip } from '@/components/ui/tooltip'
import { TooltipContent, TooltipTrigger } from '@/components/ui/tooltip'
import { Link } from '@tanstack/react-router'
import { createFileRoute } from '@tanstack/react-router'
import { HomeIcon } from 'lucide-react'

export const Route = createFileRoute('/_auth/mails')({
	component: Mails,
})

function Mails() {
	return (
		<aside className='absolute left-0 inset-y-0 h-screen bg-red-200'>
			<nav className='grid place-content-center'>
				<Tooltip>
					<TooltipTrigger>
						<Link>
							<Button className='w-full p-5' variant='ghost'>
								<HomeIcon className='size-10' />
							</Button>
						</Link>
					</TooltipTrigger>
					<TooltipContent>
						<p>Home</p>
					</TooltipContent>
				</Tooltip>
				<Tooltip>
					<TooltipTrigger>
						<Link>
							<Button className='w-full p-5'>
								<HomeIcon className='size-10' />
								<p className='hidden sm:block'>Home</p>
							</Button>
						</Link>
					</TooltipTrigger>
					<TooltipContent>
						<p>Home</p>
					</TooltipContent>
				</Tooltip>
			</nav>
		</aside>
	)
}
