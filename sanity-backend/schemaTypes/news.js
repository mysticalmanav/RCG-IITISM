export default {
    name: 'news',
    type: 'document',
    title: 'News',
    fields: [
      {
        name: 'title',
        type: 'string',
        title: 'Title',
        description: 'The title of the news item',
      },
      {
        name: 'description',
        type: 'text',
        title: 'Description',
        description: 'A brief description of the news',
      },
      {
        name: 'date',
        type: 'date',
        title: 'Date',
        description: 'The date of the news',
      },
      {
        name: 'link',
        type: 'url',
        title: 'Link',
        description: 'Optional link for more details',
      },
    ],
  };
  