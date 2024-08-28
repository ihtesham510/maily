import { api } from '@convex/_generated/api'
import { useQuery } from 'convex/react'

const useGetInboxMails = () => useQuery(api.mails.getInboxEmails)
const useGetSentMails = () => useQuery(api.mails.getSentEmails)

type InboxMails = ReturnType<typeof useGetInboxMails>
type NonUndefined<T> = T extends undefined ? never : T
export type Mail = NonUndefined<InboxMails> extends (infer U)[] ? U : never

export function useMail() {
	const inboxMails = useGetInboxMails()
	const sentMails = useGetSentMails()
	return { inboxMails, sentMails }
}
