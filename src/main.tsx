import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import ClerkConvexProvider from '@/components/ClerkConvexProvider.tsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ProtectedRoute from './components/ProtectedRoute'
import UnProtectedRoute from './components/UnProtectedRoutes'
import Home from '@/Pages/Home/index'
import Mails from '@/Pages/Mails/index'
import MailDisplay from '@/components/MailDisplay/index'
import NewMail from '@/components/NewMail/index'
import Inbox from '@/Pages/Mails/Inbox/index'
import Draft from '@/Pages/Mails/Draft/index'
import Junk from '@/Pages/Mails/Junk/index'
import Archive from '@/Pages/Mails/Archive/index'
import Trash from '@/Pages/Mails/Trash/index'
import Sent from '@/Pages/Mails/Sent/index'

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
							<Route index element={<MailDisplay />} />
							<Route path='new' element={<NewMail />} />
							<Route path=':id' element={<MailDisplay />} />
						</Route>
						<Route path='drafts' element={<Draft />}>
							<Route index element={<MailDisplay />} />
							<Route path='new' element={<NewMail />} />
							<Route path=':id' element={<MailDisplay />} />
						</Route>
						<Route path='sent' element={<Sent />}>
							<Route index element={<MailDisplay />} />
							<Route path='new' element={<NewMail />} />
							<Route path=':id' element={<MailDisplay />} />
						</Route>
						<Route path='junk' element={<Junk />}>
							<Route index element={<MailDisplay />} />
							<Route path='new' element={<NewMail />} />
							<Route path=':id' element={<MailDisplay />} />
						</Route>
						<Route path='trash' element={<Trash />}>
							<Route index element={<MailDisplay />} />
							<Route path='new' element={<NewMail />} />
							<Route path=':id' element={<MailDisplay />} />
						</Route>
						<Route path='archive' element={<Archive />}>
							<Route index element={<MailDisplay />} />
							<Route path='new' element={<NewMail />} />
							<Route path=':id' element={<MailDisplay />} />
						</Route>
					</Route>
					<Route path='*' element={<p>Not found</p>} />
				</Routes>
			</BrowserRouter>
		</ClerkConvexProvider>
	</StrictMode>,
)
