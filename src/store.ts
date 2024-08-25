import { create } from 'zustand'
import { Mail, mails } from './components/Mail/data'
type Theme = 'light' | 'dark'
interface ThemeStoreType {
	theme: Theme
	toggleTheme: () => void
}

const initalTheme = localStorage.getItem('theme') === 'dark'

export const useThemeStore = create<ThemeStoreType>()(set => ({
	theme: initalTheme ? 'dark' : 'light',
	toggleTheme: () =>
		set(state => ({
			theme: state.theme === 'dark' ? 'light' : 'dark',
		})),
}))

interface TypeQueryStore {
	search: string
	setSearch: (query: string) => void
}

export const useQueryStore = create<TypeQueryStore>()(set => ({
	search: '',
	setSearch: query => set({ search: query }),
}))

interface MailStore {
	mails: Mail[]
	setMails: (mails: Mail[]) => void
}
export const useMailStore = create<MailStore>()(set => ({
	mails: mails,
	setMails: mails => set({ mails: mails }),
}))
