import { defineSchema, defineTable } from 'convex/server'
import { v } from 'convex/values'

export default defineSchema({
	users: defineTable({
		id: v.string(),
		first_name: v.string(),
		last_name: v.optional(v.string()),
		image_url: v.optional(v.string()),
		tokenidentifier: v.string(),
		email: v.string(),
	})
		.index('by_email', ['email'])
		.index('by_tokenidentifier', ['tokenidentifier'])
		.index('by_user_id', ['id']),
	email: defineTable({
		subject: v.string(),
		text: v.string(),
		read: v.boolean(),
		from: v.object({
			userId: v.id('users'),
			email: v.string(),
			name: v.string(),
		}),
		to: v.object({
			userId: v.id('users'),
			email: v.string(),
			name: v.string(),
		}),
		labels: v.array(v.string()),
	})
		.index('by_inbox', ['to.userId', 'to.email', 'to.name'])
		.index('by_sent', ['from.userId', 'from.email', 'from.name'])
		.index('by_email', ['to.email', 'from.email']),
})
