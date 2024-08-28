import { Textarea } from '@/components/ui/textarea'
import { Separator } from '@/components/ui/separator'
import { SendIcon } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function ReplyBox({
	open,
	onTextChange,
}: {
	open: boolean
	onTextChange?: (text: string) => void
}) {
	return (
		<div style={{ display: open ? 'block' : 'none' }}>
			<Separator />
			<div className='mx-6 my-4'>
				<Textarea
					placeholder='Add Message here.'
					className='h-[140px]'
					onChange={e => onTextChange && onTextChange(e.target.value)}
				/>
			</div>
			<div className='mx-6 flex justify-between flex-row-reverse items-center my-4'>
				<Button className='gap-2 flex justify-center items-center'>
					<p className='text-md font-bold'>Send</p>
					<SendIcon className='size-4 mt-[2px]' />
				</Button>
			</div>
		</div>
	)
}
