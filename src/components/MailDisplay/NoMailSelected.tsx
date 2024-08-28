import { Info } from 'lucide-react'

const NoMailSelected = () => {
	return (
		<div className='w-full h-screen flex flex-col gap-4 justify-center items-center'>
			<Info className='size-32 text-primary/10' />
			<p className='text-xl font-semibold text-primary/15'>No Mail Selected</p>
		</div>
	)
}

export default NoMailSelected
