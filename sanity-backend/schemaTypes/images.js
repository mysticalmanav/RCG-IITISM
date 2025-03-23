// schemas/carousel.js
export default {
    name: 'carousel',
    type: 'document',
    title: 'Carousel',
    fields: [
      {
        name: 'image',
        type: 'image',
        title: 'Image',
        description: 'The image for the carousel',
        options: {
          hotspot: true, // Enables responsive cropping
        },
      },
      {
        name: 'altText',
        type: 'string',
        title: 'Alt Text',
        description: 'Alternative text for the image (optional)',
      },
      {
        name: 'caption',
        type: 'string',
        title: 'Caption',
        description: 'A short caption for the image (optional)',
      },
    ],
  };