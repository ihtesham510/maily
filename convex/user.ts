import { ConvexError, v } from 'convex/values'
import { internalMutation, query } from './_generated/server'

export const getUserIdentity = query({
	handler: async ctx => {
		const identity = await ctx.auth.getUserIdentity()
		if (!identity) throw new ConvexError('User must be logged in')
		const user = await ctx.db
			.query('users')
			.withIndex('by_tokenidentifier', q =>
				q.eq('tokenidentifier', identity.tokenIdentifier),
			)
			.first()
		return { ...identity, dbUserData: user }
	},
})

export const createUser = internalMutation({
	args: {
		id: v.string(),
		first_name: v.string(),
		last_name: v.optional(v.string()),
		image_url: v.optional(v.string()),
		email: v.string(),
		tokenidentifier: v.string(),
	},
	handler: async (ctx, args) => {
		return await ctx.db.insert('users', { ...args })
	},
})

export const updateUser = internalMutation({
	args: {
		id: v.string(),
		first_name: v.string(),
		last_name: v.optional(v.string()),
		image_url: v.optional(v.string()),
		tokenidentifier: v.string(),
		email: v.string(),
	},
	handler: async (ctx, args) => {
		const user = await ctx.db
			.query('users')
			.filter(q => q.eq(q.field('id'), args.id))
			.first()
		if (!user) throw new ConvexError('User not found')
		return await ctx.db.patch(user._id, { ...args })
	},
})

export const deleteUser = internalMutation({
	args: {
		id: v.string(),
	},
	handler: async (ctx, args) => {
		const user = await ctx.db
			.query('users')
			.filter(q => q.eq(q.field('id'), args.id))
			.first()
		if (!user) throw new ConvexError('User not found')
		return await ctx.db.delete(user._id)
	},
})
