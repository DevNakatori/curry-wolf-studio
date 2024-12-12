import { defineArrayMember, defineField, defineType } from 'sanity'
import { VscMegaphone, VscCalendar } from 'react-icons/vsc'

export default defineType({
	name: 'announcement',
	title: 'Announcement',
	icon: VscMegaphone,
	type: 'object',
	fieldsets: [{ name: 'schedule', options: { columns: 2 } }],
	fields: [
		defineField({
			name: 'content',
			type: 'array',
            title: 'Content',
            of: [
                defineArrayMember({
                    name: 'paragraph',
                    type: 'string',
                }),
            ],
        
		}),
		defineField({
			name: 'duration',
			title: 'Animation Duration',
			type: 'number',
		}),
		defineField({
			name: 'start',
			title: 'Start',
			type: 'datetime',
		}),
		defineField({
			name: 'end',
			title: 'End',
			type: 'datetime',
		}),
	],
	preview: {
		select: {
			content: 'content',
			start: 'start',
			end: 'end',
		},
		prepare: ({ content, start, end }) => ({
			title: getBlockText(content),
            subtitle: `${start} - ${end}`,
			media: (start || end) && VscCalendar,
		}),
	},
})

export function getBlockText(
	block?: {
		children?: {
			text: string
		}[]
	}[],
	lineBreakChar: string = '↵ ',
) {
	return (
		block?.reduce((a, c, i) => {
			const text = c.children?.flatMap((c) => c.text).join('') || ''
			return a + text + (i !== block.length - 1 ? lineBreakChar : '')
		}, '') || ''
	)
}
