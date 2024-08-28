import { type Mail } from '@/Hooks/useMail'
import { Link } from 'react-router-dom'
import { useActiveLocation } from '@/Hooks/useActiveLocation'
import { Badge } from '@/components/ui/badge'
import { ComponentProps } from 'react'
import { LoaderCircle, MailXIcon } from 'lucide-react'
import { formatDate } from '@/lib/date'

const MailList = (props: { mails: Mail[] | undefined }) => {
	return (
		<div>
			{!props.mails && (
				<div className='h-[600px] w-full flex justify-center items-center'>
					<LoaderCircle className='size-7 animate-spin' />
				</div>
			)}
			{props.mails && props.mails.length === 0 && (
				<div className='h-[480px] w-full flex flex-col gap-4 justify-center items-center'>
					<MailXIcon className='size-32 text-primary-foreground' />
					<p className=' text-2xl text-primary-foreground font-bold'>
						Empty Inbox
					</p>
				</div>
			)}
			{props.mails &&
				props.mails.length !== 0 &&
				props.mails.map((mail, index) => <Mail key={index} mail={mail} />)}
		</div>
	)
}

function Mail({ mail }: { mail: Mail }) {
	const isActive = useActiveLocation()
	return (
		<Link to={mail._id}>
			<div
				className={`${isActive(mail._id) ? 'bg-muted' : ''} h-max p-2 my-2 mx-4 rounded-md border-border border`}
			>
				<div className='m-1'>
					<div className='flex justify-between items-center'>
						<h1 className='text-md font-bold flex gap-3 justify-center items-center'>
							{mail.from.name}
							{!mail.read && (
								<p className='rounded-full bg-blue-600 size-[6px]' />
							)}
						</h1>
						<p className='text-xs font-semibold text-muted-foreground'>
							{formatDate(mail._creationTime)}
						</p>
					</div>
					<h2 className='text-xs font-semibold'>{mail.subject}</h2>
				</div>
				<div className='m-1'>
					<div className='line-clamp-3 text-xs text-muted-foreground'>
						{mail.text.substring(0, 300)}
					</div>
				</div>
				{mail.labels.length ? (
					<div className='flex items-center gap-2 ml-1 mt-[10px]'>
						{mail.labels.map(label => (
							<Badge
								key={label}
								className='rounded-md flex justify-center items-center'
								variant={getBadgeVariantFromLabel(label)}
							>
								{label}
							</Badge>
						))}
					</div>
				) : null}
			</div>
		</Link>
	)
}

function getBadgeVariantFromLabel(
	label: string,
): ComponentProps<typeof Badge>['variant'] {
	if (['work'].includes(label.toLowerCase())) {
		return 'default'
	}
	if (['personal'].includes(label.toLowerCase())) {
		return 'outline'
	}
	return 'secondary'
}

export default MailList
