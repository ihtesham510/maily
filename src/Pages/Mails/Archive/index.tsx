import { useMailStore } from '@/store'
import FolderContainer from '@/Components/FolderContainer'
const Archive = () => {
	const { mails } = useMailStore()
	return (
		<>
			<FolderContainer
				header={
					<>
						<h1 className='text-3xl font-bold ml-4'>Archive</h1>
					</>
				}
				mails={mails}
			/>{' '}
		</>
	)
}

export default Archive
