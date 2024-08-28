import FolderContainer from '@/Components/FolderContainer'
import { useMailStore } from '@/store'

const Junk = () => {
	const { mails } = useMailStore()
	return (
		<>
			<FolderContainer
				header={
					<>
						<h1 className='text-3xl font-bold ml-4'>Junk</h1>
					</>
				}
				mails={mails}
			/>
		</>
	)
}

export default Junk
