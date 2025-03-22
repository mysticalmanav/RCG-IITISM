// schemas/faculty.js
export default {
    name: 'faculty',
    type: 'document',
    title: 'Faculty',
    fields: [
      {
        name: 'name',
        type: 'string',
        title: 'Name',
        description: 'The name of the faculty member',
      },
      {
        name: 'image',
        type: 'image',
        title: 'Image',
        description: 'The image of the faculty member',
        options: {
          hotspot: true, // Enables responsive cropping
        },
      },
      {
        name: 'qualification',
        type: 'string',
        title: 'Qualification',
        description: 'The qualification of the faculty member (e.g., Ph.D.)',
      },
      {
        name: 'institute',
        type: 'string',
        title: 'Institute',
        description: 'The institute where the faculty member completed their degree',
      },
      {
        name: 'areasOfInterest',
        type: 'text',
        title: 'Areas of Interest',
        description: 'The areas of interest of the faculty member',
      },
      {
        name: 'email',
        type: 'string',
        title: 'Email',
        description: 'The email address of the faculty member',
      },
      {
        name: 'profileLink',
        type: 'url',
        title: 'Profile Link',
        description: 'The link to the faculty member’s profile',
      },
    ],
  };