import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import ClerkConvexProvider from '@/components/ClerkConvexProvider.tsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from '@/Pages/Home'
import Mails from '@/Pages/Mails/index'
import ProtectedRoute from './components/ProtectedRoute'
import UnProtectedRoute from './components/UnProtectedRoutes'
import Inbox from '@/Pages/Mails/Inbox/index'
import MailDisplay from '@/Pages/Mails/Inbox/mail/index'

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<ClerkConvexProvider>
			<BrowserRouter>
				<Routes>
					<Route
						path='/'
						element={
							<UnProtectedRoute>
								<Home />
							</UnProtectedRoute>
						}
					/>
					<Route
						path='/mails'
						element={
							<ProtectedRoute>
								<Mails />
							</ProtectedRoute>
						}
					>
						<Route path='inbox' element={<Inbox />}>
							<Route path=':id' element={<MailDisplay />} />
						</Route>
						<Route path='drafts'>
							<Route path=':id' />
						</Route>
						<Route path='sent'>
							<Route path=':id' />
						</Route>
						<Route path='junk'>
							<Route path=':id' />
						</Route>
						<Route path='trash'>
							<Route path=':id' />
						</Route>
						<Route path='archive'>
							<Route path=':id' />
						</Route>
					</Route>
					<Route path='*' element={<p>Not found</p>} />
				</Routes>
			</BrowserRouter>
		</ClerkConvexProvider>
	</StrictMode>,
)
