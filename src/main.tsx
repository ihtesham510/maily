import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import TanstackRouter from './components/TanstackRouter.tsx'
import './index.css'
import ClerkConvexProvider from '@/components/ClerkConvexProvider.tsx'
import { TooltipProvider } from '@/components/ui/tooltip.tsx'

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<TooltipProvider>
			<ClerkConvexProvider>
				<TanstackRouter />
			</ClerkConvexProvider>
		</TooltipProvider>
	</StrictMode>,
)
