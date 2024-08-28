import { useMailStore } from '@/store'
import FolderContainer from '@/Components/FolderContainer'
import { useMail } from '@/Hooks/useMail'

const Trash = () => {
	const { inboxMails } = useMail()
	return (
		<>
			<FolderContainer
				header={
					<>
						<h1 className='text-3xl font-bold ml-4'>Trash</h1>
					</>
				}
				mails={inboxMails}
			/>
		</>
	)
}

export default Trash
