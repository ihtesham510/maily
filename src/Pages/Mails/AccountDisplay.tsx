import React from 'react'
import { Button } from '@/components/ui/button'
import { Skeleton } from '../../components/ui/skeleton'
import { User, useUser } from '@/Hooks/useUser'
import {
	Popover,
	PopoverContent,
	PopoverTrigger,
} from '@/components/ui/popover'
import { SignOutButton } from '@clerk/clerk-react'

interface Props {
	collapsed: boolean
}

const AccountDisplay: React.FC<Props> = ({ collapsed }) => {
	const user = useUser()
	return (
		<div>
			<ProfilePopOver collapsed={collapsed} user={user}>
				{collapsed ? (
					<div className='flex justify-center items-center mb-1 mt-2'>
						<Button
							className=' h-9 w-9 dark:bg-muted dark:text-muted-foreground dark:hover:bg-muted dark:hover:text-white'
							size='icon'
						>
							{user ? (
								<>
									<img
										className='size-9 rounded-md'
										src={user.pictureUrl}
										alt={user.name}
									/>
									<span className='sr-only'>{user.givenName}</span>
								</>
							) : (
								<>
									<Skeleton className='size-9 rounded-md' />
								</>
							)}
						</Button>
					</div>
				) : (
					<div className='size-max cursor-pointer mr-2 w-auto rounded-md mx-2 flex my-2 items-center m-1 justify-between'>
						{user ? (
							<>
								<img
									className='size-9 rounded-md ml-1'
									src={user.pictureUrl}
									alt={user.givenName}
								/>
								<p className='mr-2 font-semibold text-sm'>
									{user.givenName ??
										user.nickname ??
										user.familyName ??
										user.name}
								</p>
							</>
						) : (
							<>
								<Skeleton className='size-9 rounded-md ml-1' />
								<Skeleton className='h-5 w-28 rounded-md ml-1' />
							</>
						)}
					</div>
				)}
			</ProfilePopOver>
		</div>
	)
}

function ProfilePopOver({
	children,
	collapsed,
	user,
}: {
	children: React.ReactNode
	collapsed: boolean
	user: User
}) {
	return (
		<Popover>
			<PopoverTrigger asChild>{children}</PopoverTrigger>
			<PopoverContent side='right' className={`${collapsed ? 'm-2' : 'm-5'}`}>
				<div className='flex space-x-4'>
					{user ? (
						<img
							className='size-9 rounded-full ml-1'
							src={user.pictureUrl}
							alt={user.givenName ?? user.familyName}
						/>
					) : (
						<Skeleton className='size-9 rounded-full' />
					)}
					<div className='space-y-1'>
						{user ? (
							<h4 className='text-sm font-semibold'>{`@${user.givenName ?? user.nickname ?? user.familyName ?? user.name}`}</h4>
						) : (
							<Skeleton className='w-24 h-5' />
						)}
						<h4 className='text-sm text-muted-foreground font-semibold'>
							{user?.name}
						</h4>
					</div>
				</div>
				<div className='flex items-center mt-6'>
					<SignOutButton>
						<Button className='h-6 w-max text-xs font-semibold'>
							Sign Out
						</Button>
					</SignOutButton>
				</div>
			</PopoverContent>
		</Popover>
	)
}

export default AccountDisplay
