// schemas/contact.js
export default {
  name: 'contact',
  type: 'document',
  title: 'Contact',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Name',
      description: 'The name of the contact person',
    },
    {
      name: 'role',
      type: 'string',
      title: 'Role',
      description: 'The role of the contact person (e.g., Coordinator)',
    },
    {
      name: 'image',
      type: 'image',
      title: 'Image',
      description: 'The image of the contact person',
      options: {
        hotspot: true, // Enables responsive cropping
      },
    },
    {
      name: 'address',
      type: 'text',
      title: 'Address',
      description: 'The address of the contact person',
    },
    {
      name: 'email',
      type: 'string',
      title: 'Email',
      description: 'The email address of the contact person',
    },
    {
      name: 'phone',
      type: 'string',
      title: 'Phone',
      description: 'The phone number of the contact person',
    },
  ],
}
