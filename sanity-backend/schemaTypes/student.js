// schemas/student.js
export default {
  name: 'student',
  type: 'document',
  title: 'Student',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Name',
      description: 'The name of the student',
    },
    {
      name: 'qualification',
      type: 'string',
      title: 'Qualification',
      description: 'The qualification of the student (e.g., B.Tech, M.Tech, Ph.D.)',
    },
    {
      name: 'department',
      type: 'string',
      title: 'Department',
      description: 'The department of the student',
    },
    {
      name: 'degree',
      type: 'string',
      title: 'Degree',
      description:
        'The degree program of the student (e.g., Undergraduate, Postgraduate, Doctoral)',
    },
    {
      name: 'image',
      type: 'image',
      title: 'Image',
      description: 'The image of the student',
      options: {
        hotspot: true, // Enables responsive cropping
      },
    },
  ],
}
