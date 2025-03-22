// schemas/staff.js
export default {
  name: 'staff',
  type: 'document',
  title: 'Staff',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Name',
      description: 'The name of the staff member',
    },
    {
      name: 'image',
      type: 'image',
      title: 'Image',
      description: 'The image of the staff member',
      options: {
        hotspot: true, // Enables responsive cropping
      },
    },
    {
      name: 'designation',
      type: 'string',
      title: 'Designation',
      description: 'The designation of the staff member (e.g., Sr. Technical Officer)',
    },
    {
      name: 'email',
      type: 'string',
      title: 'Email',
      description: 'The email address of the staff member (optional)',
    },
  ],
}
