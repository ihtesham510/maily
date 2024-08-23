import { create } from 'zustand'
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
