import FolderContainer from '@/Components/FolderContainer'
import { useMail } from '@/Hooks/useMail'

const Sent = () => {
	const { sentMails } = useMail()
	return (
		<>
			<FolderContainer
				header={
					<>
						<h1 className='text-3xl font-bold ml-4'>Sent</h1>
					</>
				}
				mails={sentMails}
			/>
		</>
	)
}

export default Sent
