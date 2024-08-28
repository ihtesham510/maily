import { usePanelStore } from '@/store'
import { useEffect } from 'react'
export const usePanels = () => {
	const panels = usePanelStore()
	useEffect(() => {
		localStorage.setItem('panel1', panels.p1.toString())
		localStorage.setItem('panel2', panels.p2.toString())
	}, [panels])
	return panels
}
