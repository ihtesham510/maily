export function formatDate(timestamp: number): string {
	const date = new Date(timestamp)

	const options: Intl.DateTimeFormatOptions = {
		month: 'short',
		day: 'numeric',
		year: 'numeric',
		hour: '2-digit',
		minute: '2-digit',
		hour12: true, // Enable 12-hour format
	}

	return date.toLocaleString('en-US', options)
}
