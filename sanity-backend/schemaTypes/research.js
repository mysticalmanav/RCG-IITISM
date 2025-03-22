// schemas/research.js
export default {
  name: 'research',
  type: 'document',
  title: 'Research',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title',
      description: 'The title of the research section (optional)',
    },
    {
      name: 'points',
      type: 'array',
      title: 'Points',
      of: [{type: 'string'}],
      description: 'An array of research points',
    },
  ],
}
