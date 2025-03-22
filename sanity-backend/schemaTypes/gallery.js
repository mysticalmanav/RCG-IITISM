// schemas/gallery.js
export default {
  name: 'gallery',
  type: 'document',
  title: 'Gallery',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title',
      description: 'The title of the gallery image',
    },
    {
      name: 'image',
      type: 'image',
      title: 'Image',
      description: 'The image for the gallery',
      options: {
        hotspot: true, // Enables responsive cropping
      },
    },
    {
      name: 'description',
      type: 'text',
      title: 'Description',
      description: 'A brief description of the image (optional)',
    },
  ],
}
