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
interface PanelStore {
	p1: number
	p2: number
	setPanel1: (value: number) => void
	setPanel2: (value: number) => void
}
const panel1 = Number(localStorage.getItem('panel1') ?? 50)
const panel2 = Number(localStorage.getItem('panel2') ?? 50)
export const usePanelStore = create<PanelStore>()(set => ({
	p1: panel1,
	p2: panel2,
	setPanel1: value => set(state => ({ ...state, p1: value })),
	setPanel2: value => set(state => ({ ...state, p2: value })),
}))
