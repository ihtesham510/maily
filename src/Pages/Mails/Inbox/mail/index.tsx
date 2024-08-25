import { useParams } from 'react-router'
import { Separator } from '@/components/ui/separator'
import { Trash2, Archive, ArchiveX, Forward, Reply } from 'lucide-react'
import {
	Tooltip,
	TooltipContent,
	TooltipProvider,
	TooltipTrigger,
} from '@/components/ui/tooltip'
import { Button } from '@/components/ui/button'
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar'
import { useEffect, useState } from 'react'
import { useMailStore } from '@/store'
import ReplyBox from './ReplyBox'
import NoMailSelected from './NoMailSelected'

const MailDisplay = () => {
	const { id } = useParams()
	const [isOpen, setIsOpen] = useState(false)
	const { mails, setMails } = useMailStore()
	const mail = mails.find(mail => mail.id == id)

	useEffect(() => {
		return () => {
			if (mail && !mail.read) {
				const updatedMail = { ...mail, read: true }
				setMails(mails.map(m => (m.id === mail.id ? updatedMail : m)))
			}
		}
	}, [mail, setMails, mails])

	if (!id) {
		return <NoMailSelected />
	}
	return (
		<>
			<div className='h-[7vh] justify-between items-center flex w-full'>
				<div className='ml-4 flex items-center gap-2'>
					<TooltipProvider>
						<Tooltip>
							<TooltipTrigger asChild>
								<Button variant='ghost' size='icon'>
									<Archive className='h-4 w-4' />
									<span className='sr-only'>Archive</span>
								</Button>
							</TooltipTrigger>
							<TooltipContent>Move to Archive</TooltipContent>
						</Tooltip>
					</TooltipProvider>
					<TooltipProvider>
						<Tooltip>
							<TooltipTrigger asChild>
								<Button variant='ghost' size='icon'>
									<ArchiveX className='h-4 w-4' />
									<span className='sr-only'>Junk</span>
								</Button>
							</TooltipTrigger>
							<TooltipContent>Move to Junk</TooltipContent>
						</Tooltip>
					</TooltipProvider>
					<TooltipProvider>
						<Tooltip>
							<TooltipTrigger asChild>
								<Button variant='ghost' size='icon'>
									<Trash2 className='h-4 w-4' />
									<span className='sr-only'>Trash</span>
								</Button>
							</TooltipTrigger>
							<TooltipContent>Move to Trash</TooltipContent>
						</Tooltip>
					</TooltipProvider>
				</div>
				<div className='mr-4 flex items-center gap-2'>
					<TooltipProvider>
						<Tooltip>
							<TooltipTrigger asChild>
								<Button
									variant='ghost'
									onClick={() => setIsOpen(prev => !prev)}
									size='icon'
								>
									<Reply className='h-4 w-4' />
									<span className='sr-only'>Reply</span>
								</Button>
							</TooltipTrigger>
							<TooltipContent>Reply</TooltipContent>
						</Tooltip>
					</TooltipProvider>
					<TooltipProvider>
						<Tooltip>
							<TooltipTrigger asChild>
								<Button variant='ghost' size='icon'>
									<Forward className='h-4 w-4' />
									<span className='sr-only'>Forward</span>
								</Button>
							</TooltipTrigger>
							<TooltipContent>Forward</TooltipContent>
						</Tooltip>
					</TooltipProvider>
				</div>
			</div>
			<Separator />
			<div className='h-[13vh] flex'>
				<div className='h-full w-[75px] mx-2 justify-center flex'>
					<Avatar className='mt-4 size-[45px]'>
						<AvatarImage />
						<AvatarFallback>CN</AvatarFallback>
					</Avatar>
				</div>
				<div className='size-full'>
					<div className='w-full h-max mt-[14px] flex justify-between items-center'>
						<h1 className='text-md font-bold'>{mail?.name}</h1>
						<p className='text-xs font-semibold text-primary/55 mr-4'>
							{mail?.date}
						</p>
					</div>
					<h1 className='text-xs font-semibold text-primary/75'>
						{mail?.subject}
					</h1>
					<h1 className='text-xs font-semibold text-primary/75'>
						{mail?.email}
					</h1>
				</div>
			</div>
			<Separator />
			<div className='flex flex-col justify-between h-[80vh]'>
				<div className='m-6'>
					{mail &&
						mail.text &&
						mail.text.split('\n').map((sentence, index) => (
							<p key={index} className='m-1 my-2 text-sm font-semibold'>
								{sentence}
							</p>
						))}
				</div>
				<ReplyBox open={isOpen} />
			</div>
		</>
	)
}

export default MailDisplay
