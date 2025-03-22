// schemas/events.js
export default {
  name: 'events',
  type: 'document',
  title: 'Events',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title', 
      description: 'The title of the event',
    },
    {
      name: 'description',
      type: 'text',
      title: 'Description',
      description: 'A brief description of the event',
    },
    {
      name: 'date',
      type: 'date',
      title: 'Date',
      description: 'The date of the event',
    },
    {
      name: 'location',
      type: 'string',
      title: 'Location',
      description: 'The location of the event',
    },
    {
      name: 'link',
      type: 'url',
      title: 'Link',
      description: 'Optional link for more details',
    },
  ],
}
