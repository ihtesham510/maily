import { ConvexError, v } from 'convex/values'
import { mutation, MutationCtx, query, QueryCtx } from './_generated/server'

export const getEmails = query({
	async handler(ctx) {
		const user = await getUserData(ctx)
		if (!user) throw new ConvexError('User not found')
		return await ctx.db
			.query('email')
			.withIndex('by_userId', q => q.eq('to.userId', user._id))
			.order('desc')
			.collect()
	},
})

export const sendMail = mutation({
	args: {
		subject: v.string(),
		text: v.string(),
		to: v.object({
			email: v.string(),
		}),
		labels: v.array(v.string()),
	},
	handler: async (ctx, args) => {
		const user = await getUserData(ctx)
		const user2 = await ctx.db
			.query('users')
			.withIndex('by_email', q => q.eq('email', args.to.email))
			.first()
		if (!user) throw new ConvexError('user not found')
		if (!user2) throw new ConvexError('user not found to send email')
		return await ctx.db.insert('email', {
			subject: args.subject,
			text: args.text,
			read: false,
			from: {
				userId: user._id,
				email: user.email,
				name: `${user.first_name} ${user.last_name}`,
			},
			to: {
				email: user2.email,
				name: `${user2.first_name} ${user2.last_name}`,
				userId: user2._id,
			},
			labels: args.labels,
		})
	},
})

export const markAsRead = mutation({
	args: { id: v.optional(v.id('email')) },
	async handler(ctx, args) {
		if (args.id) {
			return await ctx.db.patch(args.id, { read: true })
		}
		return null
	},
})

// helper functions
async function getUserData(ctx: QueryCtx | MutationCtx, email?: string) {
	const identity = await ctx.auth.getUserIdentity()
	if (identity === null) throw new ConvexError('user must logged in')
	return await ctx.db
		.query('users')
		.withIndex(email ? 'by_email' : 'by_tokenidentifier', q =>
			q.eq(
				email ? 'email' : 'tokenidentifier',
				email ? email : identity.tokenIdentifier,
			),
		)
		.first()
}
