import { Button } from '@/components/ui/button'
import { SignInButton } from '@clerk/clerk-react'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({
	component: () => <Home />,
})

function Home() {
	return (
		<>
			<SignInButton mode='modal'>
				<Button>Sign in</Button>
			</SignInButton>
		</>
	)
}
