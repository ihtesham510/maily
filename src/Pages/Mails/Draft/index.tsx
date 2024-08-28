import FolderContainer from '@/Components/FolderContainer'
import { useMail } from '@/Hooks/useMail'

const Draft = () => {
	const { inboxMails } = useMail()
	return (
		<>
			<FolderContainer
				header={
					<>
						<h1 className='text-3xl font-bold ml-4'>Draft</h1>
					</>
				}
				mails={inboxMails}
			/>
		</>
	)
}

export default Draft
